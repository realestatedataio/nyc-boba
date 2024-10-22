import { Snd, SndFrontTruncated } from "../../model/snd/index.js";
import fs from "fs";




class SndMapper
{
    constructor()
    {
    };


    async FromFile(d: string): Promise<Snd>
    {
        let s = new Snd();

        s.version = null;
        s.rectype = d.substring(0, 1);
        s.boro = d.substring(1, 2);
        s.stname = d.substring(2, 34);
        s.primaryflag = d.substring(34, 35);
        s.principalflag = d.substring(35, 36);
        s.sc5 = d.substring(37, 42);
        s.lgc = d.substring(42, 44);
        s.spv = d.substring(44, 47);
        s.filler = d.substring(47, 49);
        s.numericind = d.substring(49, 50);
        s.gft = d.substring(50, 51);
        s.lenfullname = parseInt(d.substring(51, 53));
        s.fullstname = d.substring(53, 85);
        s.minsnl = d.substring(85, 87);
        s.stn20 = d.substring(87, 107);
        s.htnametypecode = d.substring(107, 108);

        return s;
    };
};

class SndFrontTruncatedMapper
{
    constructor()
    {
    };

    
    async FromFile(d: string): Promise<SndFrontTruncated>
    {
        let s = new SndFrontTruncated();

        s.version = null;
        s.rectype = d.substring(0, 1);
        s.boro = d.substring(1, 2);
        s.stname = d.substring(2, 34);
        s.filler = d.substring(34, 48);
        s.numericind = d.substring(49, 50);
        s.gft = d.substring(50, 51);
        s.lenfullname = parseInt(d.substring(51, 53));
        s.numofprogens = parseInt(d.substring(53, 54));
        s.progenword1 = d.substring(54, 55);
        s.progengft1 = d.substring(55, 56);
        s.progenb10sc1 = d.substring(56, 67);
        s.progenfiller1 = d.substring(67, 70);
        s.progenword2 = d.substring(70, 71);
        s.progengft2 = d.substring(71, 72);
        s.progenb10sc2 = d.substring(72, 83);
        s.progenfiller2 = d.substring(83, 86);

        return s;
    };
};

export { SndMapper, SndFrontTruncatedMapper };
