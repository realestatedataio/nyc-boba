import { default as RediNycBoba } from "../../index.js";
import fs from "fs";
import readline from "readline";
import minimist from "minimist";
import { MongoClient } from "mongodb";
const argv = minimist(process.argv.slice(2));
const ProcessFile = async (file, sndCollection, sndFtCollection) => {
    const GeneratorFunc = (resolve, reject) => {
        let count = 0;
        let processed = 0;
        let insertPromises = [];
        let paused = false;
        const sndMapper = new RediNycBoba.SndMapper();
        const sndFtMapper = new RediNycBoba.SndFrontTruncatedMapper();
        const rs = fs.createReadStream(file);
        const rl = readline.createInterface({
            "input": rs,
            "crlfDelay": Infinity
        });
        rl.on("line", async (line) => {
            count = count + 1;
            //console.log("Processed " + count);
            //process.stdout.write("\rProcessed " + count);
            if (count === 1) {
                return;
            }
            try {
                let mapper = line[50] === "S" ? sndFtMapper : sndMapper;
                let collection = line[50] === "S" ? sndFtCollection : sndCollection;
                let s = await mapper.FromFile(line);
                s = s.ToJson();
                insertPromises.push(collection.insertOne(s));
            }
            catch (e) {
                console.error(e);
            }
            if (insertPromises.length >= 500) {
                paused = true;
                rl.pause();
            }
        });
        rl.on("pause", async () => {
            while (insertPromises.length) {
                let promises = insertPromises.splice(0, 50);
                await Promise.allSettled(promises);
                processed = processed + promises.length;
                process.stdout.write("\rTotal processed: " + processed);
            }
            rl.resume();
        });
        rl.on("resume", () => {
            paused = false;
        });
        rl.on("close", async () => {
            console.log("closed");
            while (paused) {
                await new Promise((resolve, reject) => { setTimeout(resolve, 1000); });
            }
            await Promise.allSettled(insertPromises);
            processed = processed + insertPromises.length;
            insertPromises = [];
            console.log("Total processed: " + processed);
            console.log("Total line count: " + count);
            if ((count - 1) !== processed) {
                reject();
            }
            else {
                resolve(processed);
            }
        });
    };
    return new Promise(GeneratorFunc);
};
const Run = async () => {
    const reqArgs = [
        "db",
        "snd-collection",
        "snd-ft-collection",
        "file"
    ];
    for (let i = 0; i < reqArgs.length; i++) {
        let v = argv.hasOwnProperty(reqArgs[i]) ? argv[reqArgs[i]] : null;
        if (v === null || v === undefined || v === "") {
            console.error("ERROR: Missing required argument \"" + reqArgs[i] + "\"");
            console.error("Syntax: node import-snd --db=<db> --snd-collection=<snd-collection> --snd-ft-collection=<snd-ft-collection> --file=<file>");
            return;
        }
    }
    const argDb = argv["db"];
    const argSndCollection = argv["snd-collection"];
    const argSndFtCollection = argv["snd-ft-collection"];
    const argFile = argv["file"];
    let mongoCreds = fs.readFileSync(process.env.REDI_CREDS_PATH + process.env.REDI_MONGODB_CREDS);
    mongoCreds = JSON.parse(mongoCreds);
    const mongoClient = new MongoClient("mongodb://" + process.env.REDI_MONGODB_URL, {
        "authSource": mongoCreds.authSource,
        "auth": { "username": mongoCreds.user, "password": mongoCreds.password },
        "socketTimeoutMS": 400000
    });
    await mongoClient.connect();
    let sndCollection = mongoClient.db(argDb).collection(argSndCollection);
    let sndFtCollection = mongoClient.db(argDb).collection(argSndFtCollection);
    try {
        await sndCollection.createIndex({ "version": 1, "boro": 1, "sc5": 1, "lgc": 1, "spv": 1 }, { "name": "b10sc", "unique": true });
        await sndFtCollection.createIndex({ "version": 1, "progenb10sc1": 1, "progenb10sc2": 1 }, { "name": "b10sc", "unique": true });
    }
    catch (e) {
        console.error("ERROR: Failed to create indexes.");
        console.error(e);
    }
    try {
        let totalProcessed = await ProcessFile(argFile, sndCollection, sndFtCollection);
        console.log("Successfully processed " + totalProcessed + " entries");
    }
    catch (e) {
        console.error("ERROR: Processing file failed due to incorrect processed vs. line count");
        console.error(e);
    }
    await mongoClient.close();
    console.log("Mongo client closed");
};
Run();