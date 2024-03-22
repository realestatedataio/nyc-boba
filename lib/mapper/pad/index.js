import { PadAddress, PadBbl } from "../../model/pad/index.js";
import { parse as FastCsvParse } from "@fast-csv/parse";
import ExcelJS from "exceljs";
import fs from "fs";




class PadAddressMapper
{
    constructor()
    {
    };


    async FromCsv(d)
    {
        let p = new PadAddress();

        p.version = d.hasOwnProperty("version") && d.version ? d.version : null;
        p.boro = d.hasOwnProperty("boro") && d.boro ? d.boro : null;
        p.block = d.hasOwnProperty("block") && d.block ? d.block : null;
        p.lot = d.hasOwnProperty("lot") && d.lot ? d.lot : null;
        p.bblscc = d.hasOwnProperty("bblscc") && d.bblscc ? d.bblscc : null;
        p.bin = d.hasOwnProperty("bin") && d.bin ? d.bin : null;
        p.lhnd = d.hasOwnProperty("lhnd") && d.lhnd ? d.lhnd : null;
        p.lhns = d.hasOwnProperty("lhns") && d.lhns ? d.lhns : null;
        p.lcontpar = d.hasOwnProperty("lcontpar") && d.lcontpar ? d.lcontpar : null;
        p.lsos = d.hasOwnProperty("lsos") && d.lsos ? d.lsos : null;
        p.hhnd = d.hasOwnProperty("hhnd") && d.hhnd ? d.hhnd : null;
        p.hhns = d.hasOwnProperty("hhns") && d.hhns ? d.hhns : null;
        p.hcontpar = d.hasOwnProperty("hcontpar") && d.hcontpar ? d.hcontpar : null;
        p.hsos = d.hasOwnProperty("hsos") && d.hsos ? d.hsos : null;
        p.scboro = d.hasOwnProperty("scboro") && d.scboro ? d.scboro : null;
        p.sc5 = d.hasOwnProperty("sc5") && d.sc5 ? d.sc5 : null;
        p.sclgc = d.hasOwnProperty("sclgc") && d.sclgc ? d.sclgc : null;
        p.stname = d.hasOwnProperty("stname") && d.stname ? d.stname : null;
        p.addrtype = d.hasOwnProperty("addrtype") && d.addrtype ? d.addrtype : null;
        p.realb7sc = d.hasOwnProperty("realb7sc") && d.realb7sc ? d.realb7sc : null;
        p.validlgcs = d.hasOwnProperty("validlgcs") && d.validlgcs ? d.validlgcs : null;
        p.parity = d.hasOwnProperty("parity") && d.parity ? d.parity : null;
        p.b10sc = d.hasOwnProperty("b10sc") && d.b10sc ? d.b10sc : null;
        p.segid = d.hasOwnProperty("segid") && d.segid ? d.segid : null;
        p.zipcode = d.hasOwnProperty("zipcode") && d.zipcode ? d.zipcode : null;
        p.physicalid = d.hasOwnProperty("physical_id") && d.physical_id ? d.physical_id : null;


        return p;
    };
    
    /*
    async FromCsv(file, writeableStream)
    {
        const GeneratorFunc = (resolve, reject) =>
        {
            console.log(FastCsvParse);
            let wb = new ExcelJS.Workbook();
            let readableStream = fs.createReadStream(file);

            if (writeableStream)
            {
                readableStream.pipe(writeableStream);
            }

            else
            {
                readableStream.pipe(FastCsvParse())
                    .on("data", (row) => { console.log(row); });
            }
        };

        return new Promise(GeneratorFunc);
    };
    */

    async ToCsv(file, padAddress)
    {
    };

    async FromXlsx(file)
    {
    };

    async ToXlsx(file, padAddress)
    {
    };

    async FromMongodb(collection, aggs)
    {
    };

    async ToMongodb(collection, padAddress)
    {
        try
        {
            await collection.insertOne(padAddress);
        }

        catch (e)
        {
            console.error(e);
        }
    };
};

class PadBblMapper
{
    constructor()
    {
    };


    async FromXlsx(file)
    {
    };

    async ToXlsx(padBbl)
    {
    };

    async FromMongodb(collection, aggs)
    {
    };

    async ToMongodb(collection, padBbl)
    {
        try
        {
            await collection.insertOne(padBbl);
        }

        catch (e)
        {
            console.error(e);
        }
    };
};

export { PadAddressMapper, PadBblMapper };
