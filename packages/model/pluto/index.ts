class Pluto
{
    _version: string = null;
    _borough: string = null;
    _block: string = null;
    _lot: string = null;
    _cd: string = null;
    _bct2020: string = null;
    _bctcb2020: string = null;
    _ct2010: string = null;
    _cb2010: string = null;
    _schooldist: string = null;
    _council: string = null;
    _zipcode: string = null;
    _firecomp: string = null;
    _policeprct: string = null;
    _healthcenterdistrict: string = null;
    _healtharea: string = null;
    _sanitboro: string = null;
    _sanitdistrict: string = null;
    _sanitsub: string = null;
    _address: string = null;
    _zonedist1: string = null;
    _zonedist2: string = null;
    _zonedist3: string = null;
    _zonedist4: string = null;
    _overlay1: string = null;
    _overlay2: string = null;
    _spdist1: string = null;
    _spdist2: string = null;
    _spdist3: string = null;
    _ltdheight: string = null;
    _splitzone: string = null;
    _bldgclass: string = null;
    _landuse: string = null;
    _easements: string = null;
    _ownertype: string = null;
    _ownername: string = null;
    _lotarea: number = null;
    _bldgarea: number = null;
    _comarea: number = null;
    _resarea: number = null;
    _officearea: number = null;
    _retailarea: number = null;
    _garagearea: number = null;
    _strgearea: number = null;
    _factryarea: number = null;
    _otherarea: number = null;
    _areasource: string = null;
    _numbldgs: number = null;
    _numfloors: number = null;
    _unitsres: number = null;
    _unitstotal: number = null;
    _lotfront: number = null;
    _lotdepth: number = null;
    _bldgfront: number = null;
    _bldgdepth: number = null;
    _ext: string = null;
    _proxcode: string = null;
    _irrlotcode: string = null;
    _lottype: string = null;
    _bsmtcode: string = null;
    _assessland: number = null;
    _assesstot: number = null;
    _exempttot: number = null;
    _yearbuilt: number = null;
    _yearalter1: number = null;
    _yearalter2: number = null;
    _histdist: string = null;
    _landmark: string = null;
    _builtfar: number = null;
    _residfar: number = null;
    _commfar: number = null;
    _facilfar: number = null;
    _borocode: string = null;
    _bbl: string = null;
    _condono: string = null;
    _tract2010: string = null;
    _xcoord: number = null;
    _ycoord: number = null;
    _zonemap: string = null;
    _zmcode: string = null;
    _sanborn: string = null;
    _taxmap: string = null;
    _edesignum: string = null;
    _appbbl: string = null;
    _appdate: string = null;
    _plutomapid: string = null;
    _firm07flag: string = null;
    _pfirm15flag: string = null;
    _dcpedited: string = null;
    _latitude: number = null;
    _longitude: number = null;
    _notes: string = null;


    constructor()
    {
    };


    ToJson()
    {
        let d = 
        {
            "version": this.version,
            "borough": this.borough,
            "block": this.block,
            "lot": this.lot,
            "cd": this.cd,
            "bct2020": this.bct2020,
            "bctcb2020": this.bctcb2020,
            "ct2010": this.ct2010,
            "cb2010": this.cb2010,
            "schooldist": this.schooldist,
            "council": this.council,
            "zipcode": this.zipcode,
            "firecomp": this.firecomp,
            "policeprct": this.policeprct,
            "healthcenterdistrict": this.healthcenterdistrict,
            "healtharea": this.healtharea,
            "sanitboro": this.sanitboro,
            "sanitdistrict": this.sanitdistrict,
            "sanitsub": this.sanitsub,
            "address": this.address,
            "zonedist1": this.zonedist1,
            "zonedist2": this.zonedist2,
            "zonedist3": this.zonedist3,
            "zonedist4": this.zonedist4,
            "overlay1": this.overlay1,
            "overlay2": this.overlay2,
            "spdist1": this.spdist1,
            "spdist2": this.spdist2,
            "spdist3": this.spdist3,
            "ltdheight": this.ltdheight,
            "splitzone": this.splitzone,
            "bldgclass": this.bldgclass,
            "landuse": this.landuse,
            "easements": this.easements,
            "ownertype": this.ownertype,
            "ownername": this.ownername,
            "lotarea": this.lotarea,
            "bldgarea": this.bldgarea,
            "comarea": this.comarea,
            "resarea": this.resarea,
            "officearea": this.officearea,
            "retailarea": this.retailarea,
            "garagearea": this.garagearea,
            "strgearea": this.strgearea,
            "factryarea": this.factryarea,
            "otherarea": this.otherarea,
            "areasource": this.areasource,
            "numbldgs": this.numbldgs,
            "numfloors": this.numfloors,
            "unitsres": this.unitsres,
            "unitstotal": this.unitstotal,
            "lotfront": this.lotfront,
            "lotdepth": this.lotdepth,
            "bldgfront": this.bldgfront,
            "bldgdepth": this.bldgdepth,
            "ext": this.ext,
            "proxcode": this.proxcode,
            "irrlotcode": this.irrlotcode,
            "lottype": this.lottype,
            "bsmtcode": this.bsmtcode,
            "assessland": this.assessland,
            "assesstot": this.assesstot,
            "exempttot": this.exempttot,
            "yearbuilt": this.yearbuilt,
            "yearalter1": this.yearalter1,
            "yearalter2": this.yearalter2,
            "histdist": this.histdist,
            "landmark": this.landmark,
            "builtfar": this.builtfar,
            "residfar": this.residfar,
            "commfar": this.commfar,
            "facilfar": this.facilfar,
            "borocode": this.borocode,
            "bbl": this.bbl,
            "condono": this.condono,
            "tract2010": this.tract2010,
            "xcoord": this.xcoord,
            "ycoord": this.ycoord,
            "zonemap": this.zonemap,
            "zmcode": this.zmcode,
            "sanborn": this.sanborn,
            "taxmap": this.taxmap,
            "edesignum": this.edesignum,
            "appbbl": this.appbbl,
            "appdate": this.appdate,
            "plutomapid": this.plutomapid,
            "firm07flag": this.firm07flag,
            "pfirm15flag": this.pfirm15flag,
            "dcpedited": this.dcpedited,
            "latitude": this.latitude,
            "longitude": this.longitude,
            "notes": this.notes
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

    set borough(v: string)
    {
        this._borough = this._StringClean(v);
    };

    get borough(): string
    {
        return this._borough;
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

    set cd(v: string)
    {
        this._cd = this._StringClean(v);
    };

    get cd(): string
    {
        return this._cd;
    };

    set bct2020(v: string)
    {
        this._bct2020 = this._StringClean(v);
    };

    get bct2020(): string
    {
        return this._bct2020;
    };

    set bctcb2020(v: string)
    {
        this._bctcb2020 = this._StringClean(v);
    };

    get bctcb2020(): string
    {
        return this._bctcb2020;
    };

    set ct2010(v: string)
    {
        this._ct2010 = this._StringClean(v);
    };

    get ct2010(): string
    {
        return this._ct2010;
    };

    set cb2010(v: string)
    {
        this._cb2010 = this._StringClean(v);
    };

    get cb2010(): string
    {
        return this._cb2010;
    };

    set schooldist(v: string)
    {
        this._schooldist = this._StringClean(v);
    };

    get schooldist(): string
    {
        return this._schooldist;
    };

    set council(v: string)
    {
        this._council = this._StringClean(v);
    };

    get council(): string
    {
        return this._council;
    };

    set zipcode(v: string)
    {
        this._zipcode = this._StringClean(v);
    };

    get zipcode(): string
    {
        return this._zipcode;
    };

    set firecomp(v: string)
    {
        this._firecomp = this._StringClean(v);
    };

    get firecomp(): string
    {
        return this._firecomp;
    };

    set policeprct(v: string)
    {
        this._policeprct = this._StringClean(v);
    };

    get policeprct(): string
    {
        return this._policeprct;
    };

    set healthcenterdistrict(v: string)
    {
        this._healthcenterdistrict = this._StringClean(v);
    };

    get healthcenterdistrict(): string
    {
        return this._healthcenterdistrict;
    };

    set healtharea(v: string)
    {
        this._healtharea = this._StringClean(v);
    };

    get healtharea(): string
    {
        return this._healtharea;
    };

    set sanitboro(v: string)
    {
        this._sanitboro = this._StringClean(v);
    };

    get sanitboro(): string
    {
        return this._sanitboro;
    };

    set sanitdistrict(v: string)
    {
        this._sanitdistrict = this._StringClean(v);
    };

    get sanitdistrict(): string
    {
        return this._sanitdistrict;
    };

    set sanitsub(v: string)
    {
        this._sanitsub = this._StringClean(v);
    };

    get sanitsub(): string
    {
        return this._sanitsub;
    };

    set address(v: string)
    {
        this._address = this._StringClean(v);
    };

    get address(): string
    {
        return this._address;
    };

    set zonedist1(v: string)
    {
        this._zonedist1 = this._StringClean(v);
    };

    get zonedist1(): string
    {
        return this._zonedist1;
    };

    set zonedist2(v: string)
    {
        this._zonedist2 = this._StringClean(v);
    };

    get zonedist2(): string
    {
        return this._zonedist2;
    };

    set zonedist3(v: string)
    {
        this._zonedist3 = this._StringClean(v);
    };

    get zonedist3(): string
    {
        return this._zonedist3;
    };

    set zonedist4(v: string)
    {
        this._zonedist4 = this._StringClean(v);
    };

    get zonedist4(): string
    {
        return this._zonedist4;
    };

    set overlay1(v: string)
    {
        this._overlay1 = this._StringClean(v);
    };

    get overlay1(): string
    {
        return this._overlay1;
    };

    set overlay2(v: string)
    {
        this._overlay2 = this._StringClean(v);
    };

    get overlay2(): string
    {
        return this._overlay2;
    };

    set spdist1(v: string)
    {
        this._spdist1 = this._StringClean(v);
    };

    get spdist1(): string
    {
        return this._spdist1;
    };

    set spdist2(v: string)
    {
        this._spdist2 = this._StringClean(v);
    };

    get spdist2(): string
    {
        return this._spdist2;
    };

    set spdist3(v: string)
    {
        this._spdist3 = this._StringClean(v);
    };

    get spdist3(): string
    {
        return this._spdist3;
    };

    set ltdheight(v: string)
    {
        this._ltdheight = this._StringClean(v);
    };

    get ltdheight(): string
    {
        return this._ltdheight;
    };

    set splitzone(v: string)
    {
        this._splitzone = this._StringClean(v);
    };

    get splitzone(): string
    {
        return this._splitzone;
    };

    set bldgclass(v: string)
    {
        this._bldgclass = this._StringClean(v);
    };

    get bldgclass(): string
    {
        return this._bldgclass;
    };

    set landuse(v: string)
    {
        this._landuse = this._StringClean(v);
    };

    get landuse(): string
    {
        return this._landuse;
    };

    set easements(v: string)
    {
        this._easements = this._StringClean(v);
    };

    get easements(): string
    {
        return this._easements;
    };

    set ownertype(v: string)
    {
        this._ownertype = this._StringClean(v);
    };

    get ownertype(): string
    {
        return this._ownertype;
    };

    set ownername(v: string)
    {
        this._ownername = this._StringClean(v);
    };

    get ownername(): string
    {
        return this._ownername;
    };

    set lotarea(v: number)
    {
        this._lotarea = v;
    };

    get lotarea(): number
    {
        return this._lotarea;
    };

    set bldgarea(v: number)
    {
        this._bldgarea = v;
    };

    get bldgarea(): number
    {
        return this._bldgarea;
    };

    set comarea(v: number)
    {
        this._comarea = v;
    };

    get comarea(): number
    {
        return this._comarea;
    };

    set resarea(v: number)
    {
        this._resarea = v;
    };

    get resarea(): number
    {
        return this._resarea;
    };

    set officearea(v: number)
    {
        this._officearea = v;
    };

    get officearea(): number
    {
        return this._officearea;
    };

    set retailarea(v: number)
    {
        this._retailarea = v;
    };

    get retailarea(): number
    {
        return this._retailarea;
    };

    set garagearea(v: number)
    {
        this._garagearea = v;
    };

    get garagearea(): number
    {
        return this._garagearea;
    };

    set strgearea(v: number)
    {
        this._strgearea = v;
    };

    get strgearea(): number
    {
        return this._strgearea;
    };

    set factryarea(v: number)
    {
        this._factryarea = v;
    };

    get factryarea(): number
    {
        return this._factryarea;
    };

    set otherarea(v: number)
    {
        this._otherarea = v;
    };

    get otherarea(): number
    {
        return this._otherarea;
    };

    set areasource(v)
    {
        this._areasource = this._StringClean(v);
    };

    get areasource()
    {
        return this._areasource;
    };

    set numbldgs(v: number)
    {
        this._numbldgs = v;
    };

    get numbldgs(): number
    {
        return this._numbldgs;
    };

    set numfloors(v: number)
    {
        this._numfloors = v;
    };

    get numfloors(): number
    {
        return this._numfloors;
    };

    set unitsres(v: number)
    {
        this._unitsres = v;
    };

    get unitsres(): number
    {
        return this._unitsres;
    };

    set unitstotal(v: number)
    {
        this._unitstotal = v;
    };

    get unitstotal()
    {
        return this._unitstotal;
    };

    set lotfront(v: number)
    {
        this._lotfront = v;
    };

    get lotfront(): number
    {
        return this._lotfront;
    };

    set lotdepth(v: number)
    {
        this._lotdepth = v;
    };

    get lotdepth(): number
    {
        return this._lotdepth;
    };

    set bldgfront(v: number)
    {
        this._bldgfront = v;
    };

    get bldgfront(): number
    {
        return this._bldgfront;
    };

    set bldgdepth(v: number)
    {
        this._bldgdepth = v;
    };

    get bldgdepth(): number
    {
        return this._bldgdepth;
    };

    set ext(v)
    {
        this._ext = this._StringClean(v);
    };

    get ext()
    {
        return this._ext;
    };

    set proxcode(v)
    {
        this._proxcode = this._StringClean(v);
    };

    get proxcode()
    {
        return this._proxcode;
    };

    set irrlotcode(v)
    {
        this._irrlotcode = this._StringClean(v);
    };

    get irrlotcode()
    {
        return this._irrlotcode;
    };

    set lottype(v)
    {
        this._lottype = this._StringClean(v);
    };

    get lottype()
    {
        return this._lottype;
    };

    set bsmtcode(v)
    {
        this._bsmtcode = this._StringClean(v);
    };

    get bsmtcode()
    {
        return this._bsmtcode;
    };

    set assessland(v: number)
    {
        this._assessland = v;
    };

    get assessland(): number
    {
        return this._assessland;
    };

    set assesstot(v: number)
    {
        this._assesstot = v;
    };

    get assesstot(): number
    {
        return this._assesstot;
    };

    set exempttot(v: number)
    {
        this._exempttot = v;
    };

    get exempttot(): number
    {
        return this._exempttot;
    };

    set yearbuilt(v: number)
    {
        this._yearbuilt = v;
    };

    get yearbuilt(): number
    {
        return this._yearbuilt;
    };

    set yearalter1(v: number)
    {
        this._yearalter1 = v;
    };

    get yearalter1(): number
    {
        return this._yearalter1;
    };

    set yearalter2(v: number)
    {
        this._yearalter2 = v;
    };

    get yearalter2(): number
    {
        return this._yearalter2;
    };

    set histdist(v)
    {
        this._histdist = this._StringClean(v);
    };

    get histdist()
    {
        return this._histdist;
    };

    set landmark(v)
    {
        this._landmark = this._StringClean(v);
    };

    get landmark()
    {
        return this._landmark;
    };

    set builtfar(v: number)
    {
        this._builtfar = v;
    };

    get builtfar(): number
    {
        return this._builtfar;
    };

    set residfar(v: number)
    {
        this._residfar = v;
    };

    get residfar(): number
    {
        return this._residfar;
    };

    set commfar(v: number)
    {
        this._commfar = v;
    };

    get commfar(): number
    {
        return this._commfar;
    };

    set facilfar(v: number)
    {
        this._facilfar = v;
    };

    get facilfar(): number
    {
        return this._facilfar;
    };

    set borocode(v: string)
    {
        this._borocode = v;
    };

    get borocode(): string
    {
        return this._borocode;
    };

    set bbl(v: string)
    {
        this._bbl = this._StringClean(v);
    };

    get bbl(): string
    {
        return this._bbl;
    };

    set condono(v: string)
    {
        this._condono = this._StringClean(v);
    };

    get condono(): string
    {
        return this._condono;
    };

    set tract2010(v: string)
    {
        this._tract2010 = this._StringClean(v);
    };

    get tract2010(): string
    {
        return this._tract2010;
    };

    set xcoord(v: number)
    {
        this._xcoord = v;
    };

    get xcoord(): number
    {
        return this._xcoord;
    };

    set ycoord(v: number)
    {
        this._ycoord = v;
    };

    get ycoord(): number 
    {
        return this._ycoord;
    };

    set zonemap(v: string)
    {
        this._zonemap = this._StringClean(v);
    };

    get zonemap(): string
    {
        return this._zonemap;
    };

    set zmcode(v: string)
    {
        this._zmcode = this._StringClean(v);
    };

    get zmcode(): string
    {
        return this._zmcode;
    };

    set sanborn(v: string)
    {
        this._sanborn = this._StringClean(v);
    };

    get sanborn(): string
    {
        return this._sanborn;
    };

    set taxmap(v: string)
    {
        this._taxmap = this._StringClean(v);
    };

    get taxmap(): string
    {
        return this._taxmap;
    };

    set edesignum(v: string)
    {
        this._edesignum = this._StringClean(v);
    };

    get edesignum(): string
    {
        return this._edesignum;
    };

    set appbbl(v: string)
    {
        this._appbbl = this._StringClean(v);
    };

    get appbbl(): string
    {
        return this._appbbl;
    };

    set appdate(v: string)
    {
        this._appdate = this._StringClean(v);
    };

    get appdate(): string
    {
        return this._appdate;
    };

    set plutomapid(v: string)
    {
        this._plutomapid = this._StringClean(v);
    };

    get plutomapid(): string
    {
        return this._plutomapid;
    };

    set firm07flag(v: string)
    {
        this._firm07flag = this._StringClean(v);
    };

    get firm07flag(): string
    {
        return this._firm07flag;
    };

    set pfirm15flag(v: string)
    {
        this._pfirm15flag = this._StringClean(v);
    };

    get pfirm15flag(): string
    {
        return this._pfirm15flag;
    };

    set dcpedited(v: string)
    {
        this._dcpedited = this._StringClean(v);
    };

    get dcpedited(): string
    {
        return this._dcpedited;
    };

    set latitude(v: number)
    {
        this._latitude = v;
    };

    get latitude(): number
    {
        return this._latitude;
    };

    set longitude(v: number)
    {
        this._longitude = v;
    };

    get longitude(): number
    {
        return this._longitude;
    };

    set notes(v: string)
    {
        this._notes = this._StringClean(v);
    };

    get notes(): string
    {
        return this._notes;
    };
};

export { Pluto };