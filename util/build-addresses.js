import fs from "fs";
import { default as RediNycBoba } from "../index.js";
import { MongoClient, ObjectId as MongoObjectId } from "mongodb";
import minimist from "minimist";
import { default as Redi } from "realestatedata";


const argv = minimist(process.argv.slice(2));

const rediAddressParser = new Redi.AddressParser();

let padBblCollection = null;
let padAddressCollection = null;
let sndCollection = null;
let sndFtCollection = null;
let buildingCollection = null;


const ProcessPadAddress = async (pad) =>
{
    let bbl = pad.boro + pad.block + pad.lot;
    let scboro = pad.scboro;
    let sc5 = pad.sc5;
    let lowAddr = pad.lhnd + " " + pad.stname;

    let houseNumbers = BuildHouseNumbers(pad.lhnd, pad.hhnd, pad.lcontpar);

    if (houseNumbers === null || (houseNumbers.length && houseNumbers[0].length === 0))
    {
        //console.log(pa.lhnd + " and " + pa.hhnd + " with parity " + pa.lcontpar);
    }

    let sndCursor = await sndCollection.find({"boro": scboro, "sc5": sc5});
    let snds = await sndCursor.toArray();

    let building = 
    {
        "bin": pad.bin,
        "boro": pad.boro,
        "block": pad.block,
        "lot": pad.lot,
        "addresses": []
    };

    if (building.bin && building.bin.match(/^[1-5]000000$/))
    {
        return null;
    }

    for (let i = 0; i < snds.length; i++)
    {
        for (let j = 0; j < houseNumbers.length; j++)
        {
            let addr = houseNumbers[j] + " " + snds[i].fullstname;
            addr = addr.replace(/\s+/g, " ").trim();

            let parsedAddr = await rediAddressParser.CleanAddress(addr);

            //console.log(parsedAddr);

            building.addresses.push
            ({
                "address": addr, 
                "cleanAddress": parsedAddr ? parsedAddr.cleanAddress : null,
                "sc5": sc5
            });
        }

        if (houseNumbers === null || houseNumbers.length === 0)
        {
            let parsedAddr = await rediAddressParser.CleanAddress(snds[i].fullstname);

            building.addresses.push
            ({
                "address": snds[i].fullstname, 
                "cleanAddress": parsedAddr ? parsedAddr.cleanAddress : null,
                "sc5": sc5
            });
        }
    }

    return building;
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
        //console.log("DIFFERENCE: " + lowLetter + " & " + highLetter + " & " + lowNumber + " & " + highNumber);
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


const CreateBuilding = async (pads) =>
{
    let result = null;
    let exists = null;
    let padPromises = [];

    //console.log(pads);

    for (let i = 0; i < pads.length; i++)
    {
        padPromises.push(ProcessPadAddress(pads[i]));
    }

    padPromises = await Promise.allSettled(padPromises);

    for (let i = 0; i < padPromises.length; i++)
    {
        let building = padPromises[i].value;

        try
        {
            let insertResult = await buildingCollection.insertOne(building);
            building._id = insertResult.insertedId;
            exists = building;
            result = building;
        }

        catch (e)
        {
            if (e.code !== 11000)
            {
                console.log(e);
            }

            exists = exists ? exists : await buildingCollection.findOne({"bin": building.bin});

            if (exists)
            {
                for (let i = 0; i < building.addresses.length; i++)
                {
                    let ba = building.addresses[i];
                    let addressExists = false;

                    for (let j = 0; j < exists.addresses.length; j++)
                    {
                        let ea = exists.addresses[j];

                        if (ba.cleanAddress === ea.cleanAddress)
                        {
                            addressExists = true;
                            break;
                        }
                    }

                    if (addressExists === false)
                    {
                        exists.addresses.push(ba);
                    }
                }

                result = await buildingCollection.updateOne({"_id": exists._id}, {"$set": {"addresses": exists.addresses}});
            }

        }

    }

    return result;
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

    padBblCollection = db.collection("nyc-boba-pad-bbl");
    padAddressCollection = db.collection("nyc-boba-pad-address");
    sndCollection = db.collection("nyc-boba-snd");
    sndFtCollection = db.collection("nyc-boba-snd-ft");
    buildingCollection = db.collection("nyc-boba-buildings");

    let padAddressCursor = await padAddressCollection.find
    ({
        "bin": {$not: /^[1-5]000000$/}
        //"_id": new MongoObjectId("65fe242048bdd6a583f7b412")
        //"bin": "1007725"
        //"lhnd": {"$regex": "^([0-9]+)([a-zA-Z])$"}
        //"lhnd": {"$regex": "^([0-9]+)-([0-9]+)$"}
    }, {"sort": {"bin": 1}});

    let padCount = 0;
    let padPromises = [];
    let pads = [];
    let prevPad = null;

    while (1)
    {
        let pad = await padAddressCursor.next();

        if (pad === null)
        {
            break;
        }

        if (prevPad && pad.bin !== prevPad.bin)
        {
            padPromises.push(CreateBuilding(pads));
            pads = [];
        }

        padCount = padCount + 1;
        pads.push(pad);
        prevPad = pad;

        if (padPromises.length >= 100)
        {
            process.stdout.write("\rProcessed " + padCount + " pad addresses");

            try
            {
                await Promise.allSettled(padPromises);
                padPromises = [];
            }

            catch (e)
            {
                console.error(e);
            }
        }
    }

    if (pads.length)
    {
        padPromises.push(CreateBuilding(pads));
    }

    if (padPromises.length)
    {
        try
        {
            await Promise.allSettled(padPromises);
            padPromises = [];
        }

        catch (e)
        {
            console.error(e);
        }
    }

    await mongoClient.close();
};

Run();