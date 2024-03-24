class Pluto
{
    _version = null;
    _borough = null;
    _block = null;
    _lot = null;
    _cd = null;
    _bct2020 = null;
    _bctcb2020 = null;
    _ct2010 = null;
    _cb2010 = null;
    _schooldist = null;
    _council = null;
    _zipcode = null;
    _firecomp = null;
    _policeprct = null;
    _healthcenterdistrict = null;
    _healtharea = null;
    _sanitboro = null;
    _sanitdistrict = null;
    _sanitsub = null;
    _address = null;
    _zonedist1 = null;
    _zonedist2 = null;
    _zonedist3 = null;
    _zonedist4 = null;
    _overlay1 = null;
    _overlay2 = null;
    _spdist1 = null;
    _spdist2 = null;
    _spdist3 = null;
    _ltdheight = null;
    _splitzone = null;
    _bldgclass = null;
    _landuse = null;
    _easements = null;
    _ownertype = null;
    _ownername = null;
    _lotarea = null;
    _bldgarea = null;
    _comarea = null;
    _resarea = null;
    _officearea = null;
    _retailarea = null;
    _garagearea = null;
    _strgearea = null;
    _factryarea = null;
    _otherarea = null;
    _areasource = null;
    _numbldgs = null;
    _numfloors = null;
    _unitsres = null;
    _unitstotal = null;
    _lotfront = null;
    _lotdepth = null;
    _bldgfront = null;
    _bldgdepth = null;
    _ext = null;
    _proxcode = null;
    _irrlotcode = null;
    _lottype = null;
    _bsmtcode = null;
    _assessland = null;
    _assesstot = null;
    _exempttot = null;
    _yearbuilt = null;
    _yearalter1 = null;
    _yearalter2 = null;
    _histdist = null;
    _landmark = null;
    _builtfar = null;
    _residfar = null;
    _commfar = null;
    _facilfar = null;
    _borocode = null;
    _bbl = null;
    _condono = null;
    _tract2010 = null;
    _xcoord = null;
    _ycoord = null;
    _zonemap = null;
    _zmcode = null;
    _sanborn = null;
    _taxmap = null;
    _edesignum = null;
    _appbbl = null;
    _appdate = null;
    _plutomapid = null;
    _firm07_flag = null;
    _pfirm15_flag = null;
    _version = null;
    _dcpedited = null;
    _latitude = null;
    _longitude = null;
    _notes = null;


    constructor()
    {
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

    set borough(v)
    {
        this._borough = this._StringClean(v);
    };

    get borough()
    {
        return this._borough;
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

    set cd(v)
    {
        this._cd = this._StringClean(v);
    };

    get cd()
    {
        return this._cd;
    };

    set bct2020(v)
    {
        this._bct2020 = this._StringClean(v);
    };

    get bct2020()
    {
        return this._bct2020;
    };

    set bctcb2020(v)
    {
        this._bctcb2020 = this._StringClean(v);
    };

    get bctcb2020()
    {
        return this._bctcb2020;
    };

    set ct2010(v)
    {
        this._ct2010 = this._StringClean(v);
    };

    get ct2010()
    {
        return this._ct2010;
    };

    set cb2010(v)
    {
        this._cb2010 = this._StringClean(v);
    };

    get cb2010()
    {
        return this._cb2010;
    };

    set schooldist(v)
    {
        this._schooldist = this._StringClean(v);
    };

    get schooldist()
    {
        return this._schooldist;
    };

    set council(v)
    {
        this._council = this._StringClean(v);
    };

    get council()
    {
        return this._council;
    };

    set zipcode(v)
    {
        this._zipcode = this._StringClean(v);
    };

    get zipcode()
    {
        return this._zipcode;
    };

    set firecomp(v)
    {
        this._firecomp = this._StringClean(v);
    };

    get firecomp()
    {
        return this._firecomp;
    };

    set policeprct(v)
    {
        this._policeprct = this._StringClean(v);
    };

    get policeprct()
    {
        return this._policeprct;
    };
};

export { Pluto };