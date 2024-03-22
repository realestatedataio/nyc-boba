import { default as RediNycBoba } from "../index.js";
import { parse as FastCsvParse } from "@fast-csv/parse";
import fs from "fs";
import { MongoClient, ObjectId as MongoObjectId } from "mongodb";
import minimist from "minimist";



const argv = minimist(process.argv.slice(2));


const ProcessCsv = async (file, collection) =>
{
    const padAddressMapper = new RediNycBoba.PadAddressMapper();

    const GeneratorFunc = (resolve, reject) =>
    {
        let rs = fs.createReadStream(file);
        let ws = FastCsvParse({"headers": true});

        let count = 0;

        ws.on("data", async (row) =>
        {
            ws.pause();

            count = count + 1;
            process.stdout.write("\rProcessed " + count);

            let pa = await padAddressMapper.FromCsv(row);            
            pa = pa.ToJson();

            try
            {
                await collection.insertOne(pa);
            }

            catch (e)
            {
                console.log(e);
            }

            ws.resume();
        });

        ws.on("end", () => { console.log(""); resolve(); });

        rs.pipe(ws);
    };

    return new Promise(GeneratorFunc);
};

const Run = async () =>
{
    let argDb = argv.hasOwnProperty("db") ? argv.db : null;
    argDb = argDb && argDb !== "" ? argDb : null;

    let argCollection = argv.hasOwnProperty("collection") ? argv.collection : null;
    argCollection = argCollection && argCollection !== "" ? argCollection : null;

    let argVersion = argv.hasOwnProperty("version") ? argv.version : null;
    argVersion = argVersion && argVersion !== "" ? argVersion : null;

    let argFile = argv.hasOwnProperty("file") ? argv.file : null;
    argFile = argFile && argFile !== "" ? argFile : null;

    if (argDb === null)
    {
        console.log("Required argument \"db\" missing");
        return;
    }

    if (argCollection === null)
    {
        console.log("Required argument \"collection\" missing");
        return;
    }

    if (argVersion === null)
    {
        console.log("Required argument \"version\" missing");
        return;
    }

    if (argFile === null)
    {
        console.log("Required argument \"file\" missing");
        return;
    }

    let mongoCreds = fs.readFileSync(process.env.REDI_CREDS_PATH + process.env.REDI_MONGODB_CREDS);
    mongoCreds = JSON.parse(mongoCreds);
    
    const mongoClient = new MongoClient
    (
        "mongodb://" + process.env.REDI_MONGODB_URL,
        {
            "authSource": mongoCreds.authSource,
            "auth": {"username": mongoCreds.user, "password": mongoCreds.password},
            "useUnifiedTopology": true,
            "socketTimeoutMS": 400000
        }
    );

    await mongoClient.connect();

    let collection = mongoClient.db(argDb).collection(argCollection);

    await ProcessCsv(argFile, collection, argVersion);
};

Run();
