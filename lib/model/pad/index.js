class PadAddress
{
    _version = null;
    _boro = null;
    _block = null;
    _lot = null;
    _bblscc = null;
    _bin = null;
    _lhnd = null;
    _lhns = null;
    _lcontpar = null;
    _lsos = null;
    _hhnd = null;
    _hhns = null;
    _hcontpar = null;
    _hsos = null;
    _scboro = null;
    _sc5 = null;
    _sclgc = null;
    _stname = null;
    _addrtype = null;
    _realb7sc = null;
    _validlgcs = null;
    _parity = null;
    _b10sc = null;
    _segid = null;
    _zipcode = null;
    _physicalid = null;


    constructor()
    {
    };



    ToJson()
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

    _StringClean(v)
    {
        return v ? v.replace(/\s+/g, " ").trim() : null;
    };

    /*********************/
    /* Setters & Getters */
    /*********************/

    set version(v)
    {
        this._version = v;
    };

    get version()
    {
        return this._version;
    };

    set boro(v)
    {
        this._boro = this._StringClean(v);
    }

    get boro()
    {
        return this._boro;
    };

    set block(v)
    {
        this._block = this._StringClean(v);
    };

    get block()
    {
        return this._block;
    };

    set lot(v)
    {
        this._lot = this._StringClean(v);
    };

    get lot()
    {
        return this._lot;
    };

    set bblscc(v)
    {
        this._bblscc = this._StringClean(v);
    };

    get bblscc()
    {
        return this._bblscc;
    };

    set bin(v)
    {
        this._bin = this._StringClean(v);
    };

    get bin()
    {
        return this._bin;
    };

    set lhnd(v)
    {
        this._lhnd = this._StringClean(v);
    };

    get lhnd()
    {
        return this._lhnd;
    };

    set lhns(v)
    {
        this._lhns = this._StringClean(v);
    };

    get lhns()
    {
        return this._lhns;
    };

    set lcontpar(v)
    {
        this._lcontpar = this._StringClean(v);
    };

    get lcontpar()
    {
        return this._lcontpar;
    };

    set lsos(v)
    {
        this._lsos = this._StringClean(v);
    };

    get lsos()
    {
        return this._lsos;
    };

    set hhnd(v)
    {
        this._hhnd = this._StringClean(v);
    };

    get hhnd()
    {
        return this._hhnd;
    };

    set hhns(v)
    {
        this._hhns = this._StringClean(v);
    };

    get hhns()
    {
        return this._hhns;
    };

    set hcontpar(v)
    {
        this._hcontpar = this._StringClean(v);
    };

    get hcontpar()
    {
        return this._hcontpar;
    };

    set hsos(v)
    {
        this._hsos = this._StringClean(v);
    };

    get hsos()
    {
        return this._hsos;
    };

    set scboro(v)
    {
        this._scboro = this._StringClean(v);
    };

    get scboro()
    {
        return this._scboro;
    };

    set sc5(v)
    {
        this._sc5 = this._StringClean(v);
    };

    get sc5()
    {
        return this._sc5;
    };

    set sclgc(v)
    {
        this._sclgc = this._StringClean(v);
    };

    get sclgc()
    {
        return this._sclgc;
    };

    set stname(v)
    {
        this._stname = this._StringClean(v);
    };

    get stname()
    {
        return this._stname;
    };

    set addrtype(v)
    {
        this._addrtype = this._StringClean(v);
    };

    get addrtype()
    {
        return this._addrtype;
    };

    set realb7sc(v)
    {
        this._realb7sc = this._StringClean(v);
    };

    get realb7sc()
    {
        return this._realb7sc;
    };

    set validlgcs(v)
    {
        this._validlgcs = this._StringClean(v);
    };

    get validlgcs()
    {
        return this._validlgcs;
    };

    set parity(v)
    {
        this._parity = this._StringClean(v);
    };

    get parity()
    {
        return this._parity;
    };

    set b10sc(v)
    {
        this._b10sc = this._StringClean(v);
    };

    get b10sc()
    {
        return this._b10sc;
    };

    set segid(v)
    {
        this._segid = this._StringClean(v);
    };

    get segid()
    {
        return this._segid;
    };

    set zipcode(v)
    {
        this._zipcode = this._StringClean(v);
    };

    get zipcode()
    {
        return this._zipcode;
    };

    set physicalid(v)
    {
        this._physicalid = this._StringClean(v);
    };

    get physicalid()
    {
        return this._physicalid;
    };
 };

class PadBbl
{
    _version = null;
    _loboro = null;
    _loblock = null;
    _lolot = null;
    _lobblscc = null;
    _hiboro = null;
    _hiblock = null;
    _hilot = null;
    _hibblscc = null;
    _boro = null
    _block = null;
    _lot = null;
    _bblscc = null;
    _billboro = null;
    _billblock = null;
    _billlot = null;
    _billbblscc = null;
    _condoflag = null;
    _condonum = null;
    _coopnum = null;
    _numbf = null;
    _numaddr = null;
    _vacant = null;
    _interior = null;


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

    _StringClean(v)
    {
        return v ? v.replace(/\s+/g, " ").trim() : null;
    };



    /*************************/
    /*** Setters & Getters ***/
    /*************************/

    set version(v)
    {
        this._version = this._StringClean(v);
    };

    get version()
    {
        return this._version;
    };

    set boro(v)
    {
        this._boro = this._StringClean(v);
    };

    get boro()
    {
        return this._boro;
    };

    set block(v)
    {
        this._block = this._StringClean(v);
    };

    get block()
    {
        return this._block;
    };

    set lot(v)
    {
        this._lot = this._StringClean(v);
    };

    get lot()
    {
        return this._lot;
    };

    set bblscc(v)
    {
        this._bblscc = this._StringClean(v);
    };

    get bblscc()
    {
        return this._bblscc;
    };

    set bin(v)
    {
        this._bin = this._StringClean(v);
    };

    get bin()
    {
        return this._bin;
    };

    set condoflag(v)
    {
        this._condoflag = this._StringClean(v);
    };

    get condoflag()
    {
        return this._condoflag;
    };

    set condonum(v)
    {
        this._condonum = this._StringClean(v);
    };

    get condonum()
    {
        return this._condonum;
    };

    set coopnum(v)
    {
        this._coopnum = this._StringClean(v);
    };

    get coopnum()
    {
        return this._coopnum;
    };

    set numbf(v)
    {
        this._numbf = this._StringClean(v);
    };

    get numbf()
    {
        return this._numbf;
    };

    set numaddr(v)
    {
        this._numaddr = this._StringClean(v);
    };

    get numaddr()
    {
        return this._numaddr;
    };

    set vacant(v)
    {
        this._vacant = this._StringClean(v);
    };

    get vacant()
    {
        return this._vacant;
    };

    set interior(v)
    {
        this._interior = this._StringClean(v);
    };

    get interior()
    {
        return this._interior;
    };
};

export { PadAddress, PadBbl };
