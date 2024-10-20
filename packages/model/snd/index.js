class Snd {
    _version = null;
    _rectype = null;
    _boro = null;
    _stname = null;
    _primaryflag = null;
    _principalflag = null;
    _sc5 = null;
    _lgc = null;
    _spv = null;
    _filler = null;
    _numericind = null;
    _gft = null;
    _lenfullname = null;
    _fullstname = null;
    _minsnl = null;
    _stn20 = null;
    _htnametypecode = null;
    constructor() {
    }
    ;
    ToJson() {
        let d = {
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
    }
    ;
    /********/
    /* Misc */
    /********/
    _StringClean(v) {
        return v ? v.replace(/\s+/g, " ").trim() : null;
    }
    ;
    /*********************/
    /* Setters & Getters */
    /*********************/
    set version(v) {
        this._version = v;
    }
    ;
    get version() {
        return this._version;
    }
    ;
    set rectype(v) {
        this._rectype = this._StringClean(v);
    }
    ;
    get rectype() {
        return this._rectype;
    }
    ;
    set boro(v) {
        this._boro = this._StringClean(v);
    }
    ;
    get boro() {
        return this._boro;
    }
    ;
    set stname(v) {
        this._stname = this._StringClean(v);
    }
    ;
    get stname() {
        return this._stname;
    }
    ;
    set primaryflag(v) {
        this._primaryflag = this._StringClean(v);
    }
    ;
    get primaryflag() {
        return this._primaryflag;
    }
    ;
    set principalflag(v) {
        this._principalflag = this._StringClean(v);
    }
    ;
    get principalflag() {
        return this._principalflag;
    }
    ;
    set sc5(v) {
        this._sc5 = this._StringClean(v);
    }
    ;
    get sc5() {
        return this._sc5;
    }
    ;
    set lgc(v) {
        this._lgc = this._StringClean(v);
    }
    ;
    get lgc() {
        return this._lgc;
    }
    ;
    set spv(v) {
        this._spv = this._StringClean(v);
    }
    ;
    get spv() {
        return this._spv;
    }
    ;
    set filler(v) {
        this._filler = this._StringClean(v);
    }
    ;
    get filler() {
        return this._filler;
    }
    ;
    set numericind(v) {
        this._numericind = this._StringClean(v);
    }
    ;
    get numericind() {
        return this._numericind;
    }
    ;
    set gft(v) {
        this._gft = this._StringClean(v);
    }
    ;
    get gft() {
        return this._gft;
    }
    ;
    set lenfullname(v) {
        this._lenfullname = v;
    }
    ;
    get lenfullname() {
        return this._lenfullname;
    }
    ;
    set fullstname(v) {
        this._fullstname = this._StringClean(v);
    }
    ;
    get fullstname() {
        return this._fullstname;
    }
    ;
    set minsnl(v) {
        this._minsnl = this._StringClean(v);
    }
    ;
    get minsnl() {
        return this._minsnl;
    }
    ;
    set stn20(v) {
        this._stn20 = this._StringClean(v);
    }
    ;
    get stn20() {
        return this._stn20;
    }
    ;
    set htnametypecode(v) {
        this._htnametypecode = this._StringClean(v);
    }
    ;
    get htnametypecode() {
        return this._htnametypecode;
    }
    ;
}
;
class SndFrontTruncated {
    _version = null;
    _rectype = null;
    _boro = null;
    _stname = null;
    _filler = null;
    _numericind = null;
    _gft = null;
    _lenfullname = null;
    _numofprogens = null;
    _progenword1 = null;
    _progengft1 = null;
    _progenb10sc1 = null;
    _progenfiller1 = null;
    _progenword2 = null;
    _progengft2 = null;
    _progenb10sc2 = null;
    _progenfiller2 = null;
    constructor() {
    }
    ;
    ToJson() {
        let d = {
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
    }
    ;
    /********/
    /* Misc */
    /********/
    _StringClean(v) {
        return v ? v.replace(/\s+/g, " ").trim() : null;
    }
    ;
    /*********************/
    /* Setters * Getters */
    /*********************/
    set version(v) {
        this._version = v;
    }
    ;
    get version() {
        return this._version;
    }
    ;
    set rectype(v) {
        this._rectype = this._StringClean(v);
    }
    ;
    get rectype() {
        return this._rectype;
    }
    ;
    set boro(v) {
        this._boro = this._StringClean(v);
    }
    ;
    get boro() {
        return this._boro;
    }
    ;
    set stname(v) {
        this._stname = this._StringClean(v);
    }
    ;
    get stname() {
        return this._stname;
    }
    ;
    set filler(v) {
        this._filler = v;
    }
    ;
    get filler() {
        return this._filler;
    }
    ;
    set numericind(v) {
        this._numericind = this._StringClean(v);
    }
    ;
    get numericind() {
        return this._numericind;
    }
    ;
    set gft(v) {
        this._gft = this._StringClean(v);
    }
    ;
    get gft() {
        return this._gft;
    }
    ;
    set lenfullname(v) {
        this._lenfullname = v;
    }
    ;
    get lenfullname() {
        return this._lenfullname;
    }
    ;
    set numofprogens(v) {
        this._numofprogens = v;
    }
    ;
    get numofprogens() {
        return this._numofprogens;
    }
    ;
    set progenword1(v) {
        this._progenword1 = this._StringClean(v);
    }
    ;
    get progenword1() {
        return this._progenword1;
    }
    ;
    set progengft1(v) {
        this._progengft1 = this._StringClean(v);
    }
    ;
    get progengft1() {
        return this._progengft1;
    }
    ;
    set progenb10sc1(v) {
        this._progenb10sc1 = this._StringClean(v);
    }
    ;
    get progenb10sc1() {
        return this._progenb10sc1;
    }
    ;
    set progenfiller1(v) {
        this._progenfiller1 = this._StringClean(v);
    }
    ;
    get progenfiller1() {
        return this._progenfiller1;
    }
    ;
    set progenword2(v) {
        this._progenword2 = this._StringClean(v);
    }
    ;
    get progenword2() {
        return this._progenword2;
    }
    ;
    set progengft2(v) {
        this._progengft2 = this._StringClean(v);
    }
    ;
    get progengft2() {
        return this._progengft2;
    }
    ;
    set progenb10sc2(v) {
        this._progenb10sc2 = this._StringClean(v);
    }
    ;
    get progenb10sc2() {
        return this._progenb10sc2;
    }
    ;
    set progenfiller2(v) {
        this._progenfiller2 = this._StringClean(v);
    }
    ;
    get progenfiller2() {
        return this._progenfiller2;
    }
    ;
}
;
export { Snd, SndFrontTruncated };
