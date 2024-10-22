class PadAddress
{
    _version: string = null;
    _boro: string = null;
    _block: string = null;
    _lot: string = null;
    _bblscc: string = null;
    _bin: string = null;
    _lhnd: string = null;
    _lhns: string = null;
    _lcontpar: string = null;
    _lsos: string = null;
    _hhnd: string = null;
    _hhns: string = null;
    _hcontpar: string = null;
    _hsos: string = null;
    _scboro: string = null;
    _sc5: string = null;
    _sclgc: string = null;
    _stname: string = null;
    _addrtype: string = null;
    _realb7sc: string = null;
    _validlgcs: string = null;
    _parity: string = null;
    _b10sc: string = null;
    _segid: string = null;
    _zipcode: string = null;
    _physicalid: string = null;


    constructor()
    {
    };



    ToJson(): any
    {
        let d = 
        {
            "version": this.version,
            "boro": this.boro,
            "block": this.block,
            "lot": this.lot,
            "bblscc": this.bblscc,
            "bin": this.bin,
            "lhnd": this.lhnd,
            "lhns": this.lhns,
            "lcontpar": this.lcontpar,
            "lsos": this.lsos,
            "hhnd": this.hhnd,
            "hhns": this.hhns,
            "hcontpar": this.hcontpar,
            "hsos": this.hsos,
            "scboro": this.scboro,
            "sc5": this.sc5,
            "sclgc": this.sclgc,
            "stname": this.stname,
            "addrtype": this.addrtype,
            "realb7sc": this.realb7sc,
            "validlgcs": this.validlgcs,
            "parity": this.parity,
            "b10sc": this.b10sc,
            "segid": this.segid,
            "zipcode": this.zipcode,
            "physicalid": this.physicalid
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

    set boro(v: string)
    {
        this._boro = this._StringClean(v);
    }

    get boro(): string
    {
        return this._boro;
    };

    set block(v: string)
    {
        this._block = this._StringClean(v);
    };

    get block(): string
    {
        return this._block;
    };

    set lot(v: string)
    {
        this._lot = this._StringClean(v);
    };

    get lot(): string
    {
        return this._lot;
    };

    set bblscc(v: string)
    {
        this._bblscc = this._StringClean(v);
    };

    get bblscc(): string
    {
        return this._bblscc;
    };

    set bin(v: string)
    {
        this._bin = this._StringClean(v);
    };

    get bin(): string
    {
        return this._bin;
    };

    set lhnd(v: string)
    {
        this._lhnd = this._StringClean(v);
    };

    get lhnd(): string
    {
        return this._lhnd;
    };

    set lhns(v: string)
    {
        this._lhns = this._StringClean(v);
    };

    get lhns(): string
    {
        return this._lhns;
    };

    set lcontpar(v: string)
    {
        this._lcontpar = this._StringClean(v);
    };

    get lcontpar(): string
    {
        return this._lcontpar;
    };

    set lsos(v: string)
    {
        this._lsos = this._StringClean(v);
    };

    get lsos(): string
    {
        return this._lsos;
    };

    set hhnd(v: string)
    {
        this._hhnd = this._StringClean(v);
    };

    get hhnd(): string
    {
        return this._hhnd;
    };

    set hhns(v: string)
    {
        this._hhns = this._StringClean(v);
    };

    get hhns(): string
    {
        return this._hhns;
    };

    set hcontpar(v: string)
    {
        this._hcontpar = this._StringClean(v);
    };

    get hcontpar(): string
    {
        return this._hcontpar;
    };

    set hsos(v: string)
    {
        this._hsos = this._StringClean(v);
    };

    get hsos(): string
    {
        return this._hsos;
    };

    set scboro(v: string)
    {
        this._scboro = this._StringClean(v);
    };

    get scboro(): string
    {
        return this._scboro;
    };

    set sc5(v: string)
    {
        this._sc5 = this._StringClean(v);
    };

    get sc5(): string
    {
        return this._sc5;
    };

    set sclgc(v: string)
    {
        this._sclgc = this._StringClean(v);
    };

    get sclgc(): string
    {
        return this._sclgc;
    };

    set stname(v: string)
    {
        this._stname = this._StringClean(v);
    };

    get stname(): string
    {
        return this._stname;
    };

    set addrtype(v: string)
    {
        this._addrtype = this._StringClean(v);
    };

    get addrtype(): string
    {
        return this._addrtype;
    };

    set realb7sc(v: string)
    {
        this._realb7sc = this._StringClean(v);
    };

    get realb7sc(): string
    {
        return this._realb7sc;
    };

    set validlgcs(v: string)
    {
        this._validlgcs = this._StringClean(v);
    };

    get validlgcs(): string
    {
        return this._validlgcs;
    };

    set parity(v: string)
    {
        this._parity = this._StringClean(v);
    };

    get parity(): string
    {
        return this._parity;
    };

    set b10sc(v: string)
    {
        this._b10sc = this._StringClean(v);
    };

    get b10sc(): string
    {
        return this._b10sc;
    };

    set segid(v: string)
    {
        this._segid = this._StringClean(v);
    };

    get segid(): string
    {
        return this._segid;
    };

    set zipcode(v: string)
    {
        this._zipcode = this._StringClean(v);
    };

    get zipcode(): string
    {
        return this._zipcode;
    };

    set physicalid(v: string)
    {
        this._physicalid = this._StringClean(v);
    };

    get physicalid(): string
    {
        return this._physicalid;
    };
 };

class PadBbl
{
    _version: string = null;
    _loboro: string = null;
    _loblock: string = null;
    _lolot: string = null;
    _lobblscc: string = null;
    _hiboro: string = null;
    _hiblock: string = null;
    _hilot: string = null;
    _hibblscc: string = null;
    _boro: string = null
    _block: string = null;
    _lot: string = null;
    _bblscc: string = null;
    _billboro: string = null;
    _billblock: string = null;
    _billlot: string = null;
    _billbblscc: string = null;
    _condoflag: string = null;
    _condonum: string = null;
    _coopnum: string = null;
    _numbf: string = null;
    _numaddr: string = null;
    _vacant: string = null;
    _interior: string = null;


    constructor()
    {
    };



    ToJson()
    {
        let d = 
        {
            "version": this.version,
            "loboro": this.loboro,
            "loblock": this.loblock,
            "lolot": this.lolot,
            "lobblscc": this.lobblscc,
            "hiboro": this.hiboro,
            "hiblock": this.hiblock,
            "hilot": this.hilot,
            "hibblscc": this.hibblscc,
            "boro": this.boro,
            "block": this.block,
            "lot": this.lot,
            "bblscc": this.bblscc,
            "billboro": this.billboro,
            "billblock": this.billblock,
            "billlot": this.billlot,
            "billbblscc": this.billbblscc,
            "condoflag": this.condoflag,
            "condonum": this.condonum,
            "coopnum": this.coopnum,
            "numbf": this.numbf,
            "numaddr": this.numaddr,
            "vacant": this.vacant,
            "interior": this.interior
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



    /*************************/
    /*** Setters & Getters ***/
    /*************************/

    set version(v: string)
    {
        this._version = this._StringClean(v);
    };

    get version(): string
    {
        return this._version;
    };

    set loboro(v: string)
    {
        this._loboro = this._StringClean(v);
    };

    get loboro(): string
    {
        return this._loboro;
    };

    set loblock(v: string)
    {
        this._loblock = this._StringClean(v);
    };

    get loblock(): string
    {
        return this._loblock;
    };

    set lolot(v: string)
    {
        this._lolot = this._StringClean(v);
    };

    get lolot(): string
    {
        return this._lolot;
    };

    set lobblscc(v: string)
    {
        this._lobblscc = this._StringClean(v);
    };

    get lobblscc(): string
    {
        return this._lobblscc;
    };

    set hiboro(v: string)
    {
        this._hiboro = this._StringClean(v);
    };

    get hiboro(): string
    {
        return this._hiboro;
    };

    set hiblock(v: string)
    {
        this._hiblock = this._StringClean(v);
    };

    get hiblock(): string
    {
        return this._hiblock;
    };

    set hilot(v: string)
    {
        this._hilot = this._StringClean(v);
    };

    get hilot(): string
    {
        return this._hilot;
    };

    set hibblscc(v: string)
    {
        this._hibblscc = this._StringClean(v);
    };

    get hibblscc(): string
    {
        return this._hibblscc;
    };

    set boro(v: string)
    {
        this._boro = this._StringClean(v);
    };

    get boro(): string
    {
        return this._boro;
    };

    set block(v: string)
    {
        this._block = this._StringClean(v);
    };

    get block(): string
    {
        return this._block;
    };

    set lot(v: string)
    {
        this._lot = this._StringClean(v);
    };

    get lot(): string
    {
        return this._lot;
    };

    set bblscc(v: string)
    {
        this._bblscc = this._StringClean(v);
    };

    get bblscc(): string
    {
        return this._bblscc;
    };

    set billboro(v: string)
    {
        this._billboro = this._StringClean(v);
    };

    get billboro(): string
    {
        return this._billboro;
    };

    set billblock(v: string)
    {
        this._billblock = this._StringClean(v);
    };

    get billblock(): string
    {
        return this._billblock;
    };

    set billlot(v: string)
    {
        this._billlot = this._StringClean(v);
    };

    get billlot(): string
    {
        return this._billlot;
    };

    set billbblscc(v: string)
    {
        this._billbblscc = this._StringClean(v);
    };

    get billbblscc(): string
    {
        return this._billbblscc;
    };

    set condoflag(v: string)
    {
        this._condoflag = this._StringClean(v);
    };

    get condoflag(): string
    {
        return this._condoflag;
    };

    set condonum(v: string)
    {
        this._condonum = this._StringClean(v);
    };

    get condonum(): string
    {
        return this._condonum;
    };

    set coopnum(v: string)
    {
        this._coopnum = this._StringClean(v);
    };

    get coopnum(): string
    {
        return this._coopnum;
    };

    set numbf(v: string)
    {
        this._numbf = this._StringClean(v);
    };

    get numbf(): string
    {
        return this._numbf;
    };

    set numaddr(v: string)
    {
        this._numaddr = this._StringClean(v);
    };

    get numaddr(): string
    {
        return this._numaddr;
    };

    set vacant(v: string)
    {
        this._vacant = this._StringClean(v);
    };

    get vacant(): string
    {
        return this._vacant;
    };

    set interior(v: string)
    {
        this._interior = this._StringClean(v);
    };

    get interior(): string
    {
        return this._interior;
    };
};

export { PadAddress, PadBbl };
