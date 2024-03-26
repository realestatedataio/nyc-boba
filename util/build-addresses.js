import fs from "fs";
import { default as RediNycBoba } from "../index.js";
import { MongoClient, ObjectId as MongoObjectId } from "mongodb";
import minimist from "minimist";



const CreateBuilding = async (buildingCollection, building) =>
{
    let result = null;

    try
    {
        let exists = await buildingCollection.findOne({"bin": building.bin});

        if (exists)
        {
            result = await buildingCollection.updateOne({"bin": building.bin}, {"$push": {"addresses": building.addresses}});
        }

        else
        {
            result = await buildingCollection.insertOne(building);
        }
    }

    catch (e)
    {
        console.log(e);
    }

    return result;
};

const BuildNumericHouseNumbers = (low, high, parity, pattern) =>
{
    let houseNumbers = [];

    low = parseInt(low);
    high = parseInt(high);

    for (let i = low; i <= high; parity ? i = i + 1 : i = i + 2)
    {
        houseNumbers.push(i.toString());
    }

    return houseNumbers;
};

const BuildSingleLetterHouseNumbers = (low, high, parity, pattern) =>
{
    let houseNumbers = [];

    let lowMatches = low.match(pattern);
    let lowNumber = parseInt(lowMatches[1]);
    let lowLetter = lowMatches[2];
    let lowLetterCode = lowLetter.charCodeAt(0);

    let highMatches = high.match(pattern);
    let highNumber = parseInt(highMatches[1]);
    let highLetter = highMatches[2];
    let highLetterCode = highLetter.charCodeAt(0);

    if (lowNumber !== highNumber && lowLetter !== highLetter)
    {
        console.log("DIFFERENCE: " + lowLetter + " & " + highLetter + " & " + lowNumber + " & " + highNumber);
        return null;
    }

    for (let i = lowNumber; i <= highNumber; parity ? i = i + 1 : i = i + 2)
    {
        for (let j = lowLetterCode; j <= highLetterCode; j++)
        {
            houseNumbers.push(i.toString() + String.fromCharCode(j));
        }
    }

    return houseNumbers;
};

const BuildDashedHouseNumbers = (low, high, parity, pattern) =>
{
    let houseNumbers = [];

    let lowMatches = low.match(pattern);
    let lowNumber0 = parseInt(lowMatches[1]);
    let lowNumber1 = parseInt(lowMatches[2]);

    let highMatches = high.match(pattern);
    let highNumber0 = parseInt(highMatches[1]);
    let highNumber1 = parseInt(highMatches[2]);

    if (lowNumber0 !== highNumber0)
    {
        return null;
    }

    for (let i = lowNumber1; i <= highNumber1; parity ? i = i + 1 : i = i + 2)
    {
        houseNumbers.push(lowNumber0.toString() + "-" + i.toString().padStart(2, "0"));
    }

    return houseNumbers;
};

const BuildDashedSingleLetterHouseNumbers = (low, high, parity, pattern) =>
{
    let houseNumbers = [];

    let lowMatches = low.match(pattern);
    let lowNumber0 = parseInt(lowMatches[1]);
    let lowNumber1 = parseInt(lowMatches[2]);
    let lowLetter = lowMatches[3];
    let lowLetterCode = lowLetter.charCodeAt(0);

    let highMatches = high.match(pattern);
    let highNumber0 = parseInt(highMatches[1]);
    let highNumber1 = parseInt(highMatches[2]);
    let highLetter = highMatches[3];
    let highLetterCode = highLetter.charCodeAt(0);

    if (lowNumber0 !== highNumber0)
    {
        return null;
    }

    for (let i = lowNumber1; i <= highNumber1; parity ? i = i + 1 : i = i + 2)
    {
        for (let j = lowLetterCode; j <= highLetterCode; j++)
        {
            let hn = lowNumber0.toString() + "-" + i.toString().padStart(2, "0") + String.fromCharCode(j);
            houseNumbers.push(hn);
        }
    }

    return houseNumbers;
};

const BuildFrontHouseNumbers = (low, high, parity, pattern) =>
{
    return null;
};

const BuildRearHouseNumbers = (low, high, parity, pattern) =>
{
    return null;
};

const BuildAirHouseNumbers = (low, high, parity, pattern) =>
{
    return null;
};

const BuildGarageHouseNumbers = (low, high, parity, pattern) =>
{
    return null;
};

const BuildUndergroundHouseNumbers = (low, high, parity, pattern) =>
{
    return null;
};

const BuildFractionHouseNumbers = (low, high, parity, pattern) =>
{
    return null;
};

const BuildHouseNumbers = (low, high, parity) =>
{
    low = low.replace(/\s+/g, " ").trim();
    high = high.replace(/\s+/g, " ").trim();

    const houseNumberTypes = 
    [
        {"pattern": /^[0-9]+$/, "func": BuildNumericHouseNumbers},
        {"pattern": /^([0-9]+)([a-zA-Z])$/, "func": BuildSingleLetterHouseNumbers},
        {"pattern": /^([0-9]+)-([0-9]+)$/, "func": BuildDashedHouseNumbers},
        {"pattern": /^([0-9]+)-([0-9]+)([a-zA-Z])$/, "func": BuildDashedSingleLetterHouseNumbers},
        {"pattern": / (FRONT)$/, "func": BuildFrontHouseNumbers},
        {"pattern": / (REAR)$/, "func": BuildRearHouseNumbers},
        {"pattern": / (AIR)$/, "func": BuildAirHouseNumbers},
        {"pattern": / (GARAGE|GAR)$/, "func": BuildGarageHouseNumbers},
        {"pattern": / (UNDERGROUND|UNDRGRND|UNDER)$/, "func": BuildUndergroundHouseNumbers},
        {"pattern": / (1\/[2-9])$/, "func": BuildFractionHouseNumbers}
    ];

    //console.log(low + " and " + high + " with parity " + parity);

    if (low === high)
    {
        return [low];
    }


    for (let i = 0; i < houseNumberTypes.length; i++)
    {
        if (low.match(houseNumberTypes[i].pattern) !== null && high.match(houseNumberTypes[i].pattern) !== null)
        {
            let houseNumbers = houseNumberTypes[i].func(low, high, parity, houseNumberTypes[i].pattern);

            if (houseNumbers && houseNumbers.length)
            {
                return houseNumbers;
            }
        }
    }

    if (low && high)
    {
        return [low, high];
    }

    console.log("ERROR: Unrecognized house number pattern: " + low + " - " + high);

    return null;
};

const Run = async () =>
{
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

    let db = mongoClient.db("redi");

    let padBblCollection = db.collection("nyc-boba-pad-bbl");
    let padAddressCollection = db.collection("nyc-boba-pad-address");
    let sndCollection = db.collection("nyc-boba-snd");
    let sndFtCollection = db.collection("nyc-boba-snd-ft");
    let buildingCollection = db.collection("nyc-boba-buildings");

    let padAddressCursor = await padAddressCollection.find
    ({
        //"lhnd": {"$regex": "^([0-9]+)([a-zA-Z])$"}
        //"lhnd": {"$regex": "^([0-9]+)-([0-9]+)$"}
    });

    let padAddressCount = 0;

    while (1)
    {
        let pa = await padAddressCursor.next();

        if (pa === null)
        {
            break;
        }

        padAddressCount = padAddressCount + 1;
        console.log("Processed " + padAddressCount + " pad addresses");

        let bbl = pa.boro + pa.block + pa.lot;
        let scboro = pa.scboro;
        let sc5 = pa.sc5;
        let lowAddr = pa.lhnd + " " + pa.stname;

        let houseNumbers = BuildHouseNumbers(pa.lhnd, pa.hhnd, pa.lcontpar);

        if (houseNumbers === null || (houseNumbers.length && houseNumbers[0].length === 0))
        {
            console.log(pa.lhnd + " and " + pa.hhnd + " with parity " + pa.lcontpar);
        }

        let sndCursor = await sndCollection.find({"boro": scboro, "sc5": sc5});
        let snds = await sndCursor.toArray();
        let addrPromises = [];

        let building = 
        {
            "bin": pa.bin,
            "boro": pa.boro,
            "block": pa.block,
            "lot": pa.lot,
            "addresses": []
        };

        if (building.bin && building.bin.match(/^[1-5]000000$/))
        {
            continue;
        }

        for (let i = 0; i < snds.length; i++)
        {
            for (let j = 0; j < houseNumbers.length; j++)
            {
                let addr = houseNumbers[j] + " " + snds[i].fullstname;
                building.addresses.push({"address": addr, "sc5": sc5});
            }
        }
    }

    try
    {
        await CreateBuilding(buildingCollection, building);
    }

    catch (e)
    {
        console.log(e);
    }

    await mongoClient.close();
};

Run();