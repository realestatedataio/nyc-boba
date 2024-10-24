import { default as RediNycBoba } from "../../index.js";
import { parse as FastCsvParse } from "@fast-csv/parse";
import fs from "fs";
import { MongoClient } from "mongodb";
import minimist from "minimist";
const argv = minimist(process.argv.slice(2));
const GetVersionFromFile = async (file) => {
    let folder = file.split("/");
    folder = folder && folder.length > 1 ? folder[folder.length - 2] : null;
    if (folder === null || folder === undefined || folder === "") {
        return null;
    }
    folder = folder.split("_");
    return folder && folder.length > 1 ? folder[1].toLowerCase().trim() : null;
};
const ProcessCsv = async (mapperName, file, collection) => {
    if (RediNycBoba.hasOwnProperty(mapperName) === false || !(RediNycBoba[mapperName])) {
        console.error("ERROR: Unrecognized mapper \"" + mapperName + "\"");
        return;
    }
    const mapper = new RediNycBoba[mapperName]();
    const GeneratorFunc = (resolve, reject) => {
        let rs = fs.createReadStream(file);
        let ws = FastCsvParse({ "headers": true });
        let count = 0;
        ws.on("data", async (row) => {
            ws.pause();
            count = count + 1;
            process.stdout.write("\rProcessed " + count);
            let r = await mapper.FromCsv(row);
            r.version = await GetVersionFromFile(file);
            r = r.ToJson();
            try {
                await collection.insertOne(r);
            }
            catch (e) {
                console.log("FAILED TO INSERT");
                console.log(e);
            }
            ws.resume();
        });
        ws.on("end", () => {
            console.log("");
            console.log("CLOSING STREAM");
            resolve();
        });
        rs.pipe(ws);
    };
    return new Promise(GeneratorFunc);
};
const Run = async () => {
    const reqArgs = [
        "db",
        "mapper",
        "collection",
        "file"
    ];
    for (let i = 0; i < reqArgs.length; i++) {
        let v = argv.hasOwnProperty(reqArgs[i]) ? argv[reqArgs[i]] : null;
        if (v === null || v === undefined || v === "") {
            console.error("Missing required argument \"" + reqArgs[i] + "\"");
            console.error("Syntax: node import-csv --db=<db> --mapper=<mapper> --collection=<collection> --file=<file>");
            return;
        }
    }
    const argDb = argv["db"];
    const argMapper = argv["mapper"];
    const argCollection = argv["collection"];
    const argFile = argv["file"];
    let mongoCreds = fs.readFileSync(process.env.REDI_CREDS_PATH + process.env.REDI_MONGODB_CREDS);
    mongoCreds = JSON.parse(mongoCreds);
    const mongoClient = new MongoClient("mongodb://" + process.env.REDI_MONGODB_URL, {
        "authSource": mongoCreds.authSource,
        "auth": { "username": mongoCreds.user, "password": mongoCreds.password },
        "socketTimeoutMS": 500000
    });
    await mongoClient.connect();
    let mapperName = argMapper + "Mapper";
    let collection = mongoClient.db(argDb).collection(argCollection);
    await ProcessCsv(mapperName, argFile, collection);
    console.log("DONE");
    await mongoClient.close();
};
Run();
