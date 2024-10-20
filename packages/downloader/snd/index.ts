import { default as Downloader } from "../index.js";




class SndDownloader extends Downloader
{
    _expectedFilePrefix = "snd_";
    _expectedFileExtension = ".zip";

    _dataUrl = "https://www.nyc.gov/site/planning/data-maps/open-data.page#other";


    constructor(config: any)
    {
        super(config);
    };
};

export default SndDownloader;
