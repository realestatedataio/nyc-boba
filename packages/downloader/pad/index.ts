import { default as Downloader } from "../index.js";


class PadDownloader extends Downloader
{
    _expectedFilePrefix = "pad_";
    _expectedFileExtension = ".zip";

    _dataUrl = "https://www.nyc.gov/site/planning/data-maps/open-data.page#other";


    constructor(config: any)
    {
        super(config);
    };
};

export default PadDownloader;
