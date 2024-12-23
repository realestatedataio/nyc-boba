import { Pluto } from "../../model/pluto/index.js";
import { Mapper } from "../index.js";
class PlutoMapper extends Mapper {
    constructor() {
        super();
    }
    ;
    async CreateIndexes(collection) {
        try {
            await collection.createIndex({ "version": 1, "borough": 1, "block": 1, "lot": 1 }, { "name": "duplicate", "unique": true });
        }
        catch (e) {
        }
    }
    ;
    async FromCsv(d) {
        let p = new Pluto();
        p.version = d.hasOwnProperty("version") && d.version ? d.version : null;
        p.borough = d.hasOwnProperty("borough") && d.borough ? d.borough : null;
        p.block = d.hasOwnProperty("block") && d.block ? d.block.padStart(5, "0") : null;
        p.lot = d.hasOwnProperty("lot") && d.lot ? d.lot.padStart(4, "0") : null;
        p.cd = d.hasOwnProperty("cd") && d.cd ? d.cd : null;
        p.bct2020 = d.hasOwnProperty("bct2020") && d.bct2020 ? d.bct2020 : null;
        p.bctcb2020 = d.hasOwnProperty("bctcb2020") && d.bctcb2020 ? d.bctcb2020 : null;
        p.ct2010 = d.hasOwnProperty("ct2010") && d.ct2010 ? d.ct2010 : null;
        p.cb2010 = d.hasOwnProperty("cb2010") && d.cb2010 ? d.cb2010 : null;
        p.schooldist = d.hasOwnProperty("schooldist") && d.schooldist ? d.schooldist : null;
        p.council = d.hasOwnProperty("council") && d.council ? d.council : null;
        p.zipcode = d.hasOwnProperty("zipcode") && d.zipcode ? d.zipcode : null;
        p.firecomp = d.hasOwnProperty("firecomp") && d.firecomp ? d.firecomp : null;
        p.policeprct = d.hasOwnProperty("policeprct") && d.policeprct ? d.policeprct : null;
        p.healthcenterdistrict = d.hasOwnProperty("healthcenterdistrict") && d.healthcenterdistrict ? d.healthcenterdistrict : null;
        p.healtharea = d.hasOwnProperty("healtharea") && d.healtharea ? d.healtharea : null;
        p.sanitboro = d.hasOwnProperty("sanitboro") && d.sanitboro ? d.sanitboro : null;
        p.sanitdistrict = d.hasOwnProperty("sanitdistrict") && d.sanitdistrict ? d.sanitdistrict : null;
        p.sanitsub = d.hasOwnProperty("sanitsub") && d.sanitsub ? d.sanitsub : null;
        p.address = d.hasOwnProperty("address") && d.address ? d.address : null;
        p.zonedist1 = d.hasOwnProperty("zonedist1") && d.zonedist1 ? d.zonedist1 : null;
        p.zonedist2 = d.hasOwnProperty("zonedist2") && d.zonedist2 ? d.zonedist2 : null;
        p.zonedist3 = d.hasOwnProperty("zonedist3") && d.zonedist3 ? d.zonedist3 : null;
        p.zonedist4 = d.hasOwnProperty("zonedist4") && d.zonedist4 ? d.zonedist4 : null;
        p.overlay1 = d.hasOwnProperty("overlay1") && d.overlay1 ? d.overlay1 : null;
        p.overlay2 = d.hasOwnProperty("overlay2") && d.overlay2 ? d.overlay2 : null;
        p.spdist1 = d.hasOwnProperty("spdist1") && d.spdist1 ? d.spdist1 : null;
        p.spdist2 = d.hasOwnProperty("spdist2") && d.spdist2 ? d.spdist2 : null;
        p.spdist3 = d.hasOwnProperty("spdist3") && d.spdist3 ? d.spdist3 : null;
        p.ltdheight = d.hasOwnProperty("ltdheight") && d.ltdheight ? d.ltdheight : null;
        p.splitzone = d.hasOwnProperty("splitzone") && d.splitzone ? d.splitzone : null;
        p.bldgclass = d.hasOwnProperty("bldgclass") && d.bldgclass ? d.bldgclass : null;
        p.landuse = d.hasOwnProperty("landuse") && d.landuse ? d.landuse : null;
        p.easements = d.hasOwnProperty("easements") && d.easements ? d.easements : null;
        p.ownertype = d.hasOwnProperty("ownertype") && d.ownertype ? d.ownertype : null;
        p.ownername = d.hasOwnProperty("ownername") && d.ownername ? d.ownername : null;
        p.lotarea = d.hasOwnProperty("lotarea") && d.lotarea ? parseInt(d.lotarea) : null;
        p.bldgarea = d.hasOwnProperty("bldgarea") && d.bldgarea ? parseInt(d.bldgarea) : null;
        p.comarea = d.hasOwnProperty("comarea") && d.comarea ? parseInt(d.comarea) : null;
        p.resarea = d.hasOwnProperty("resarea") && d.resarea ? parseInt(d.resarea) : null;
        p.officearea = d.hasOwnProperty("officearea") && d.officearea ? parseInt(d.officearea) : null;
        p.retailarea = d.hasOwnProperty("retailarea") && d.retailarea ? parseInt(d.retailarea) : null;
        p.garagearea = d.hasOwnProperty("garagearea") && d.garagearea ? parseInt(d.garagearea) : null;
        p.strgearea = d.hasOwnProperty("strgearea") && d.strgearea ? parseInt(d.strgearea) : null;
        p.factryarea = d.hasOwnProperty("factryarea") && d.factryarea ? parseInt(d.factryarea) : null;
        p.otherarea = d.hasOwnProperty("otherarea") && d.otherarea ? parseInt(d.otherarea) : null;
        p.areasource = d.hasOwnProperty("areasource") && d.areasource ? d.areasource : null;
        p.numbldgs = d.hasOwnProperty("numbldgs") && d.numbldgs ? parseInt(d.numbldgs) : null;
        p.numfloors = d.hasOwnProperty("numfloors") && d.numfloors ? parseFloat(d.numfloors) : null;
        p.unitsres = d.hasOwnProperty("unitsres") && d.unitsres ? parseInt(d.unitsres) : null;
        p.unitstotal = d.hasOwnProperty("unitstotal") && d.unitstotal ? parseInt(d.unitstotal) : null;
        p.lotfront = d.hasOwnProperty("lotfront") && d.lotfront ? parseFloat(d.lotfront) : null;
        p.lotdepth = d.hasOwnProperty("lotdepth") && d.lotdepth ? parseFloat(d.lotdepth) : null;
        p.bldgfront = d.hasOwnProperty("bldgfront") && d.bldgfront ? parseFloat(d.bldgfront) : null;
        p.bldgdepth = d.hasOwnProperty("bldgdepth") && d.bldgdepth ? parseFloat(d.bldgdepth) : null;
        p.ext = d.hasOwnProperty("ext") && d.ext ? d.ext : null;
        p.proxcode = d.hasOwnProperty("proxcode") && d.proxcode ? d.proxcode : null;
        p.irrlotcode = d.hasOwnProperty("irrlotcode") && d.irrlotcode ? d.irrlotcode : null;
        p.lottype = d.hasOwnProperty("lottype") && d.lottype ? d.lottype : null;
        p.bsmtcode = d.hasOwnProperty("bsmtcode") && d.bsmtcode ? d.bsmtcode : null;
        p.assessland = d.hasOwnProperty("assessland") && d.assessland ? parseFloat(d.assessland) : null;
        p.assesstot = d.hasOwnProperty("assesstot") && d.assesstot ? parseFloat(d.assesstot) : null;
        p.exempttot = d.hasOwnProperty("exempttot") && d.exempttot ? parseFloat(d.exempttot) : null;
        p.yearbuilt = d.hasOwnProperty("yearbuilt") && d.yearbuilt ? parseInt(d.yearbuilt) : null;
        p.yearalter1 = d.hasOwnProperty("yearalter1") && d.yearalter1 ? parseInt(d.yearalter1) : null;
        p.yearalter2 = d.hasOwnProperty("yearalter2") && d.yearalter2 ? parseInt(d.yearalter2) : null;
        p.histdist = d.hasOwnProperty("histdist") && d.histdist ? d.histdist : null;
        p.landmark = d.hasOwnProperty("landmark") && d.landmark ? d.landmark : null;
        p.builtfar = d.hasOwnProperty("builtfar") && d.builtfar ? parseFloat(d.builtfar) : null;
        p.residfar = d.hasOwnProperty("residfar") && d.residfar ? parseFloat(d.residfar) : null;
        p.commfar = d.hasOwnProperty("commfar") && d.commfar ? parseFloat(d.commfar) : null;
        p.facilfar = d.hasOwnProperty("facilfar") && d.facilfar ? parseFloat(d.facilfar) : null;
        p.borocode = d.hasOwnProperty("borocode") && d.borocode ? d.borocode : null;
        p.bbl = d.hasOwnProperty("bbl") && d.bbl ? d.bbl.toString().split(".")[0] : null;
        p.condono = d.hasOwnProperty("condono") && d.condono ? d.condono : null;
        p.tract2010 = d.hasOwnProperty("tract2010") && d.tract2010 ? d.tract2010 : null;
        p.xcoord = d.hasOwnProperty("xcoord") && d.xcoord ? parseInt(d.xcoord) : null;
        p.ycoord = d.hasOwnProperty("ycoord") && d.ycoord ? parseInt(d.ycoord) : null;
        p.zonemap = d.hasOwnProperty("zonemap") && d.zonemap ? d.zonemap : null;
        p.zmcode = d.hasOwnProperty("zmcode") && d.zmcode ? d.zmcode : null;
        p.sanborn = d.hasOwnProperty("sanborn") && d.sanborn ? d.sanborn : null;
        p.taxmap = d.hasOwnProperty("taxmap") && d.taxmap ? d.taxmap : null;
        p.edesignum = d.hasOwnProperty("edesignum") && d.edesignum ? d.edesignum : null;
        p.appbbl = d.hasOwnProperty("appbbl") && d.appbbl ? d.appbbl : null;
        p.appdate = d.hasOwnProperty("appdate") && d.appdate ? d.appdate : null;
        p.plutomapid = d.hasOwnProperty("plutomapid") && d.plutomapid ? d.plutomapid : null;
        p.firm07flag = d.hasOwnProperty("firm07_flag") && d.firm07_flag ? d.firm07_flag : null;
        p.pfirm15flag = d.hasOwnProperty("pfirm15_flag") && d.pfirm15_flag ? d.pfirm15_flag : null;
        p.version = d.hasOwnProperty("version") && d.version ? d.version : null;
        p.dcpedited = d.hasOwnProperty("dcpedited") && d.dcpedited ? d.dcpedited : null;
        p.latitude = d.hasOwnProperty("latitude") && d.latitude ? parseFloat(d.latitude) : null;
        p.longitude = d.hasOwnProperty("longitude") && d.longitude ? parseFloat(d.longitude) : null;
        p.notes = d.hasOwnProperty("notes") && d.notes ? d.notes : null;
        return p;
    }
    ;
}
;
export { PlutoMapper };
