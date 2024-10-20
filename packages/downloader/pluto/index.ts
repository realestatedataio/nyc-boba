import { default as Downloader } from "../index.js";




class PlutoDownloader extends Downloader
{
    _expectedFilePrefix = "nyc_pluto_";
    _expectedFileExtension = ".zip";

    _dataUrl = "https://www.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page";


    constructor(config: any)
    {
        super(config);
    };
};

export default PlutoDownloader;
