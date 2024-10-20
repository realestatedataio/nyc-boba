class Snd
{
    _version: string = null;
    _rectype: string = null;
    _boro: string = null;
    _stname: string = null;
    _primaryflag: string = null;
    _principalflag: string = null;
    _sc5: string = null;
    _lgc: string = null;
    _spv: string = null;
    _filler: string = null;
    _numericind: string = null;
    _gft: string = null;
    _lenfullname: number = null;
    _fullstname: string = null;
    _minsnl: string = null;
    _stn20: string = null;
    _htnametypecode: string = null;

    
    constructor()
    {
    };

    ToJson(): any
    {
        let d = 
        {
            "version": this.version,
            "rectype": this.rectype,
            "boro": this.boro,
            "stname": this.stname,
            "primaryflag": this.primaryflag,
            "principalflag": this.principalflag,
            "sc5": this.sc5,
            "lgc": this.lgc,
            "spv": this.spv,
            "filler": this.filler,
            "numericind": this.numericind,
            "gft": this.gft,
            "lenfullname": this.lenfullname,
            "fullstname": this.fullstname,
            "minsnl": this.minsnl,
            "stn20": this.stn20,
            "htnametypecode": this.htnametypecode
        };

        return d;
    };



    /********/
    /* Misc */
    /********/

    _StringClean(v: string): string
    {
        return v ? v.replace(/\s+/g, " ").trim() : null;
    };



    /*********************/
    /* Setters & Getters */
    /*********************/

    set version(v: string)
    {
        this._version = v;
    };

    get version(): string
    {
        return this._version;
    };

    set rectype(v: string)
    {
        this._rectype = this._StringClean(v);
    };

    get rectype(): string
    {
        return this._rectype;
    };

    set boro(v: string)
    {
        this._boro = this._StringClean(v);
    };

    get boro(): string
    {
        return this._boro;
    };

    set stname(v: string)
    {
        this._stname = this._StringClean(v);
    };

    get stname(): string
    {
        return this._stname;
    };

    set primaryflag(v: string)
    {
        this._primaryflag = this._StringClean(v);
    };

    get primaryflag(): string
    {
        return this._primaryflag;
    };

    set principalflag(v: string)
    {
        this._principalflag = this._StringClean(v);
    };

    get principalflag(): string
    {
        return this._principalflag;
    };

    set sc5(v: string)
    {
        this._sc5 = this._StringClean(v);
    };

    get sc5(): string
    {
        return this._sc5;
    };

    set lgc(v: string)
    {
        this._lgc = this._StringClean(v);
    };

    get lgc(): string
    {
        return this._lgc;
    };

    set spv(v: string)
    {
        this._spv = this._StringClean(v);
    };

    get spv(): string
    {
        return this._spv;
    };

    set filler(v: string)
    {
        this._filler = this._StringClean(v);
    };

    get filler(): string
    {
        return this._filler;
    };

    set numericind(v: string)
    {
        this._numericind = this._StringClean(v);
    };

    get numericind(): string
    {
        return this._numericind;
    };

    set gft(v: string)
    {
        this._gft = this._StringClean(v);
    };

    get gft(): string
    {
        return this._gft;
    };

    set lenfullname(v: number)
    {
        this._lenfullname = v;
    };

    get lenfullname(): number
    {
        return this._lenfullname;
    };

    set fullstname(v: string)
    {
        this._fullstname = this._StringClean(v);
    };

    get fullstname(): string
    {
        return this._fullstname;
    };

    set minsnl(v: string)
    {
        this._minsnl = this._StringClean(v);
    };

    get minsnl(): string
    {
        return this._minsnl;
    };

    set stn20(v: string)
    {
        this._stn20 = this._StringClean(v);
    };

    get stn20(): string
    {
        return this._stn20;
    };

    set htnametypecode(v: string)
    {
        this._htnametypecode = this._StringClean(v);
    };

    get htnametypecode(): string
    {
        return this._htnametypecode;
    };
};

class SndFrontTruncated
{
    _version: string = null;
    _rectype: string = null;
    _boro: string = null;
    _stname: string = null;
    _filler: string = null;
    _numericind: string = null;
    _gft: string = null;
    _lenfullname: number = null;
    _numofprogens: number = null;
    _progenword1: string = null;
    _progengft1: string = null;
    _progenb10sc1: string = null;
    _progenfiller1: string = null;
    _progenword2: string = null;
    _progengft2: string = null;
    _progenb10sc2: string = null;
    _progenfiller2: string = null;


    constructor()
    {
    };


    ToJson(): any
    {
        let d = 
        {
            "version": this.version,
            "rectype": this.rectype,
            "boro": this.boro,
            "stname": this.stname,
            "filler": this.filler,
            "numericind": this.numericind,
            "gft": this.gft,
            "lenfullname": this.lenfullname,
            "numofprogens": this.numofprogens,
            "progenword1": this.progenword1,
            "progengft1": this.progengft1,
            "progenb10sc1": this.progenb10sc1,
            "progenfiller1": this.progenfiller1,
            "progenword2": this.progenword2,
            "progengft2": this.progengft2,
            "progenb10sc2": this.progenb10sc2,
            "progenfiller2": this.progenfiller2
        };

        return d;
    };


    /********/
    /* Misc */
    /********/

    _StringClean(v: string): string
    {
        return v ? v.replace(/\s+/g, " ").trim() : null;
    };


    /*********************/
    /* Setters * Getters */
    /*********************/

    set version(v: string)
    {
        this._version = v;
    };

    get version(): string
    {
        return this._version;
    };

    set rectype(v: string)
    {
        this._rectype = this._StringClean(v);
    };

    get rectype(): string
    {
        return this._rectype;
    };

    set boro(v: string)
    {
        this._boro = this._StringClean(v);
    };

    get boro(): string
    {
        return this._boro;
    };

    set stname(v: string)
    {
        this._stname = this._StringClean(v);
    };

    get stname(): string
    {
        return this._stname;
    };

    set filler(v: string)
    {
        this._filler = v;
    };

    get filler(): string
    {
        return this._filler;
    };

    set numericind(v: string)
    {
        this._numericind = this._StringClean(v);
    };

    get numericind(): string
    {
        return this._numericind;
    };

    set gft(v: string)
    {
        this._gft = this._StringClean(v);
    };

    get gft(): string
    {
        return this._gft;
    };

    set lenfullname(v: number)
    {
        this._lenfullname = v;
    };

    get lenfullname(): number 
    {
        return this._lenfullname;
    };

    set numofprogens(v: number)
    {
        this._numofprogens = v;
    };

    get numofprogens(): number 
    {
        return this._numofprogens;
    };

    set progenword1(v: string)
    {
        this._progenword1 = this._StringClean(v);
    };

    get progenword1(): string
    {
        return this._progenword1;
    };

    set progengft1(v: string)
    {
        this._progengft1 = this._StringClean(v);
    };

    get progengft1(): string
    {
        return this._progengft1;
    };

    set progenb10sc1(v: string)
    {
        this._progenb10sc1 = this._StringClean(v);
    };

    get progenb10sc1(): string
    {
        return this._progenb10sc1;
    };

    set progenfiller1(v: string)
    {
        this._progenfiller1 = this._StringClean(v);
    };

    get progenfiller1()
    {
        return this._progenfiller1;
    };

    set progenword2(v: string)
    {
        this._progenword2 = this._StringClean(v);
    };

    get progenword2(): string
    {
        return this._progenword2;
    };

    set progengft2(v: string)
    {
        this._progengft2 = this._StringClean(v);
    };

    get progengft2(): string
    {
        return this._progengft2;
    };

    set progenb10sc2(v: string)
    {
        this._progenb10sc2 = this._StringClean(v);
    };

    get progenb10sc2(): string
    {
        return this._progenb10sc2;
    };

    set progenfiller2(v: string)
    {
        this._progenfiller2 = this._StringClean(v);
    };

    get progenfiller2(): string
    {
        return this._progenfiller2;
    };
};

export { Snd, SndFrontTruncated };
