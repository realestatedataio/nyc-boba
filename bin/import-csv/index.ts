import { default as RediNycBoba } from "../../index.js";
import { parse as FastCsvParse } from "@fast-csv/parse";
import fs from "fs";
import { MongoClient, ObjectId as MongoObjectId } from "mongodb";
import minimist from "minimist";



const argv = minimist(process.argv.slice(2));


const GetVersionFromFile = (file: string): Promise<string> =>
{
    let folder: any = file.split("/");
    folder = folder && folder.length > 1 ? folder[folder.length - 2] : null;

    if (folder === null || folder === undefined || folder === "")
    {
        return null;
    }

    folder = folder.split("_");

    return folder && folder.length > 1 ? folder[1].toLowerCase().trim() : null;
};

const ProcessCsv = async (mapperName: string, file: string, collection: any) =>
{
    if (RediNycBoba.hasOwnProperty(mapperName) === false || !(RediNycBoba[mapperName]))
    {
        console.error("ERROR: Unrecognized mapper \"" + mapperName + "\"");
        return;
    }

    const mapper = new RediNycBoba[mapperName]();

    const InsertOne = async (collection, s) =>
    {
        try
        {
            await collection.insertOne(s);
        }

        catch (e)
        {
            if (e.code !== 11000)
            {
                console.error(e);
            }
        }
    };

    const GeneratorFunc = (resolve, reject) =>
    {
        let rs = fs.createReadStream(file);
        let ws = FastCsvParse({"headers": true});

        let count = 0;
        let processed = 0;
        let insertPromises = [];
        let version = GetVersionFromFile(file);

        ws.on("data", async (row) =>
        {
            count = count + 1;

            try
            {
                let r = await mapper.FromCsv(row);            
                r.version = version;
                r = r.ToJson();

                insertPromises.push(InsertOne(collection, r));
            }

            catch (e)
            {
                console.error(e);
            }

            if (insertPromises.length >= 1000)
            {
                rs.pause();
                let promises = insertPromises.splice(0, 1000);
                await Promise.allSettled(promises);
                processed = processed + promises.length;
                process.stdout.write("\rProcessed " + processed);
                rs.resume();
            }
        });

        ws.on("end", async () => 
        {
            await Promise.allSettled(insertPromises);
            processed = processed + insertPromises.length;
            console.log("\rProcessed " + processed);

            rs.close();
            resolve(); 
        });

        rs.pipe(ws);
    };

    return new Promise(GeneratorFunc);
};

const Run = async (): Promise<void> =>
{
    const reqArgs = 
    [
        "db",
        "mapper",
        "collection",
        "file"
    ];

    for (let i = 0; i < reqArgs.length; i++)
    {
        let v = argv.hasOwnProperty(reqArgs[i]) ? argv[reqArgs[i]] : null;

        if (v === null || v === undefined || v === "")
        {
            console.error("Missing required argument \"" + reqArgs[i] + "\"");
            console.error("Syntax: node import-csv --db=<db> --mapper=<mapper> --collection=<collection> --file=<file>");
            return;
        }
    }

    const argDb = argv["db"];
    const argMapper = argv["mapper"];
    const argCollection = argv["collection"];
    const argFile = argv["file"];

    let mongoCreds: any = fs.readFileSync(process.env.REDI_CREDS_PATH + process.env.REDI_MONGODB_CREDS);
    mongoCreds = JSON.parse(mongoCreds);
    
    const mongoClient = new MongoClient
    (
        "mongodb://" + process.env.REDI_MONGODB_URL,
        {
            "authSource": mongoCreds.authSource,
            "auth": {"username": mongoCreds.user, "password": mongoCreds.password},
            "socketTimeoutMS": 500000
        }
    );

    await mongoClient.connect();

    let mapperName = argMapper + "Mapper";
    let collection = mongoClient.db(argDb).collection(argCollection);

    try
    {
        if (mapperName === "PadAddressMapper")
        {
            await collection.createIndex
            (
                {"version": 1, "boro": 1, "block": 1, "lot": 1, "bin": 1, "lhnd": 1, "b10sc": 1},
                {"name": "duplicate", "unique": true}
            );
        }

        else if (mapperName === "PadBblMapper")
        {
            await collection.createIndex
            (
                {"version": 1, "loboro": 1, "loblock": 1, "lolot": 1},
                {"name": "duplicate", "unique": true}
            );
        }
    }

    catch (e)
    {
    }

    await ProcessCsv(mapperName, argFile, collection);

    console.log("DONE");
    await mongoClient.close();
};

Run();
