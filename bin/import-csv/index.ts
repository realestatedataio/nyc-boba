import { default as RediNycBoba } from "../../index.js";
import { parse as FastCsvParse } from "@fast-csv/parse";
import fs from "fs";
import { MongoClient, ObjectId as MongoObjectId } from "mongodb";
import minimist from "minimist";



const argv = minimist(process.argv.slice(2));
const argMatch = argv.hasOwnProperty("match") ? true : false;


const GetVersionFromFile = (file: string): string =>
{
    let folder: any = file.split("/");
    folder = folder && folder.length > 1 ? folder[folder.length - 2] : null;

    if (folder === null || folder === undefined || folder === "")
    {
        return null;
    }

    folder = folder.split("_");

    if (folder.length === 2)
    {
        return folder[1].toLowerCase().trim();
    }

    else if (folder[0].toLowerCase().trim() === "nyc")
    {
        if (folder[folder.length - 1].toLowerCase().trim() === "csv")
        {
            let version = [];

            for (let i = 2; i < folder.length - 1; i++)
            {
                version.push(folder[i]);
            }

            return version.join("_").toLowerCase().trim();
        }
    }

    return null;
};

const ProcessCsv = async (mapper: any, file: string, collection: any) =>
{
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

    const FindMatchedFile = (file: string): string =>
    {
        let folder = file.split("/");
        let fileName = folder.pop();

        if (fileName)
        {
            let dir = fs.opendirSync(folder.join("/"));
            let matchedFile = null;

            while (1)
            {
                let dirent = dir.readSync();

                if (dirent === null)
                {
                    break;
                }

                if (dirent.isFile() === false)
                {
                    continue;
                }

                if (dirent.name.match(fileName))
                {
                    matchedFile = dirent.name;
                    break
                }
            }

            dir.closeSync();
            
            if (matchedFile)
            {
                folder.push(matchedFile);
                file = folder.join("/");
            }
        }

        return file;
    };

    const GeneratorFunc = (resolve, reject) =>
    {
        if (argMatch)
        {
            console.log("Looking for matched file");
            file = FindMatchedFile(file);
            console.log("Found " + file);
        }

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

    let collection = mongoClient.db(argDb).collection(argCollection);
    let mapperName = argMapper + "Mapper";

    if (RediNycBoba.hasOwnProperty(mapperName) === false || !(RediNycBoba[mapperName]))
    {
        console.error("ERROR: Unrecognized mapper \"" + mapperName + "\"");
        return;
    }

    let mapper = new RediNycBoba[mapperName]();
    await mapper.CreateIndexes(collection);

    await ProcessCsv(mapper, argFile, collection);

    console.log("DONE");
    await mongoClient.close();
};

Run();
