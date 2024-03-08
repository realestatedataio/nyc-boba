import * as puppeteer from "puppeteer-core";
import * as fs from "fs";




class Downloader
{
    _config = {};

    _browserPath = null;
    _browserUserDataDir = null;
    _browserDownloadDir = null;

    _browserArgs = 
    [
        "--disable-background-timer-throttling",
        "--disable-backgrounding-occluded-windows",
        "--disable-renderer-backgrounding",
        "--disable-breakpad",
        "--disable-sync",
        "--disable-translate",
        "--metrics-recording-only",
        "--no-first-run",
        "--hide-scrollbars",
        "--disable-infobars",
        "--no-sandbox",
        "--no-zygote",
        "--disable-crash-reporter",
        "--structured-metrics-disabled",
        "--start-maximized",
        "--user-data-dir=" + this._browserUserDataDir
    ];

    _browser = null;
    _browserCdp = null;

    _page = null;
    _cdp = null;

    _expectedFilePrefix = null;
    _expectedFileExtension = null;

    _dataUrl = null;


    constructor(config)
    {
        this._config = config ? config : this._config;

        this._browserPath = this._config.hasOwnProperty("browserPath") ? this._config.browserPath : process.env.REDI_BROWSER_PATH;
        this._browserUserDataDir = this._config.hasOwnProperty("browserUserDataDir") ? this._config.browserUserDataDir : process.env.REDI_BROWSER_USER_DATA_DIR;
        this._browserDownloadDir = this._config.hasOwnProperty("browserDownloadDir") ? this._config.browserDownloadDir : process.env.REDI_BROWSER_DOWNLOAD_DIR;

        this._browserArgs = 
        [
            "--disable-background-timer-throttling",
            "--disable-backgrounding-occluded-windows",
            "--disable-renderer-backgrounding",
            "--disable-breakpad",
            "--disable-sync",
            "--disable-translate",
            "--metrics-recording-only",
            "--no-first-run",
            "--hide-scrollbars",
            "--disable-infobars",
            "--no-sandbox",
            "--no-zygote",
            "--disable-crash-reporter",
            "--structured-metrics-disabled",
            "--start-maximized",
            "--user-data-dir=" + this._browserUserDataDir
        ];


    };

    
    async _Sleep(ms)
    {
        return new Promise((resolve) => { setTimeout(resolve, ms); });
    };

    async _WaitForDownload(fileName)
    {
        console.log("Waiting for download of " + fileName);
        let that = this;

        const GeneratorFunc = (resolve, reject) =>
        {
            that._browserCdp.on("Browser.downloadProgress", (evt) =>
            {
                if (evt.state === "completed")
                {
                    console.log("\rDownloading...Complete!");
                    resolve(fileName);
                }

                else if (evt.state === "inProgress")
                {
                    process.stdout.write("\rDownloading..." + Math.ceil((evt.receivedBytes / evt.totalBytes).toFixed(2) * 100) + "%");
                }

                else if (evt.state === "canceled")
                {
                    reject();
                }
            });
        };

        return new Promise(GeneratorFunc);
    };


    async _SetDownloadPath(path)
    {
        if (this._cdp === null)
        {
            console.error("ERROR: CDP session unavailable.");
            return;
        }

        await this._browserCdp.send("Browser.setDownloadBehavior",
        {
            "behavior": "allow",
            "downloadPath": path,
            "eventsEnabled": true
        });
    };


    async Init()
    {
    };

    async CloseBrowser()
    {
        if (this._browserCdp)
        {
            await this._browserCdp.detach();
        }

        if (this._cdp)
        {
            await this._cdp.detach();
        }

        if (this._browser)
        {
            await this._browser.close();
        }
    };

    async LaunchBrowser()
    {
        await this.CloseBrowser();

        console.log("Launching browser.");

        this._browser = await puppeteer.launch
        ({
            "headless": "new",
            "timeout": 0,
            "executablePath": this._browserPath,
            "args": this._browserArgs,
            "defaultViewport": null
        });

        this._page = (await this._browser.pages())[0];
        this._browserCdp = await this._browser.target().createCDPSession();
        this._cdp = await this._page.target().createCDPSession();

        this._SetDownloadPath(this._browserDownloadDir);
    };

    async NavigateToDataUrl()
    {
        if (this._page === null)
        {
            console.error("No page detected.");
            return;
        }

        await this._page.goto(this._dataUrl, {"timeout": 30000});
    };

    IsDesiredFile(e)
    {
        if (e && e.indexOf(this._expectedFilePrefix) !== -1 && e.indexOf(this._expectedFileExtension) !== -1)
        {
            return true;
        }

        return false;
    };

    async GetFileData()
    {
        let fileLinkFound = false;
        let fileName = null;

        try
        {
            await this._page.waitForSelector(".mainbox a", {"timeout": 5000});
            let linkEles = await this._page.$$(".mainbox a");

            for (let i = 0; i < linkEles.length; i++)
            {
                try
                {
                    let e = linkEles[i];
                    e = e ? await linkEles[i].getProperty("href") : null;
                    e = e ? await e.jsonValue() : null;
                    e = e ? e.trim() : null;

                    if (this.IsDesiredFile(e))
                    {
                        console.log("Link found: " + e);

                        fileLinkFound = true;
                        fileName = e.split("/")
                        fileName = fileName && fileName.length ? fileName[fileName.length - 1] : null;

                        return {"name": fileName, "handle": linkEles[i]};
                    }
                }

                catch (e)
                {
                }
            }
        }

        catch (e)
        {
            console.error("ERROR: Failed to find links.");
            console.error(e);
        }

        return null;
    };

    async Run()
    {
        let fileData = null;

        try
        {
            await this.LaunchBrowser();
            await this.NavigateToDataUrl();

            fileData = await this.GetFileData();
            
            if (fileData && fileData.hasOwnProperty("handle") && fileData.handle)
            {
                await Promise.allSettled([fileData.handle.click({"delay": 3}), this._WaitForDownload(fileData.name)]);
            }

            else
            {
                throw "No file data was found";
            }
        }

        catch (e)
        {
            console.error(e);
        }

        await this.CloseBrowser();

        return fileData ? (this._browserDownloadDir + "/" + fileData.name) : null;
    };

};

export default Downloader;
