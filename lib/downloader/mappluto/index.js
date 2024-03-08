import { default as Downloader } from "../index.js";




class MapPlutoDownloader extends Downloader
{
    _expectedFilePrefix = "nyc_mappluto_";
    _expectedFileExtension = ".zip";

    _dataUrl = "https://www.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page";


    constructor(config)
    {
        super(config);
    };


    IsDesiredFile(e)
    {
        if (super.IsDesiredFile(e) === false)
        {
            return false;
        }

        if (e && e.indexOf("_shp") !== -1)
        {
            return true;
        }

        return false;
    };
};

export default MapPlutoDownloader;
