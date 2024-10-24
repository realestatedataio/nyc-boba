import * as puppeteer from "puppeteer-core";
import * as fs from "fs";




class Downloader
{
    _config: any = {};

    _browserPath: string = null;
    _browserUserDataDir: string = null;
    _browserDownloadDir: string = null;

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

    _browser: puppeteer.Browser = null;
    _browserCdp: puppeteer.CDPSession = null;

    _page: puppeteer.Page = null;
    _cdp: puppeteer.CDPSession = null;

    _expectedFilePrefix: string = null;
    _expectedFileExtension: string = null;

    _dataUrl: string = null;


    constructor(config: any)
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

    
    async _WaitForTimeout(ms: number): Promise<void>
    {
        return new Promise((resolve) => { setTimeout(resolve, ms); });
    };

    async _WaitForDownload(fileName: string): Promise<string>
    {
        console.log("Waiting for download of " + fileName);
        let that = this;

        const GeneratorFunc = (resolve: (v: string) => any, reject: () => any) =>
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
                    let p: number = Math.ceil(parseFloat((evt.receivedBytes / evt.totalBytes).toFixed(2)) * 100);
                    process.stdout.write("\rDownloading..." + p + "%");
                }

                else if (evt.state === "canceled")
                {
                    reject();
                }
            });
        };

        return new Promise(GeneratorFunc);
    };


    async _SetDownloadPath(path: string): Promise<void>
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


    async Init(): Promise<void>
    {
    };

    async CloseBrowser(): Promise<void>
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

    async LaunchBrowser(): Promise<puppeteer.Browser>
    {
        await this.CloseBrowser();

        console.log("Launching browser.");

        this._browser = await puppeteer.launch
        ({
            "headless": true,
            "timeout": 0,
            "executablePath": this._browserPath,
            "args": this._browserArgs,
            "defaultViewport": null
        });

        this._page = (await this._browser.pages())[0];
        this._browserCdp = await this._browser.target().createCDPSession();
        this._cdp = await this._page.target().createCDPSession();

        this._SetDownloadPath(this._browserDownloadDir);

        return this._browser;
    };

    async NavigateToDataUrl(): Promise<puppeteer.HTTPResponse>
    {
        if (this._page === null)
        {
            console.error("No page detected.");
            return;
        }

        return await this._page.goto(this._dataUrl, {"timeout": 30000});
    };

    IsDesiredFile(e: string): boolean
    {
        if (e && e.indexOf(this._expectedFilePrefix) !== -1 && e.indexOf(this._expectedFileExtension) !== -1)
        {
            return true;
        }

        return false;
    };

    async GetFileData(): Promise<any>
    {
        let fileLinkFound: boolean = false;
        let fileName: string = null;

        try
        {
            await this._page.waitForSelector(".mainbox a", {"timeout": 5000});
            let linkEles = await this._page.$$(".mainbox a");

            for (let i = 0; i < linkEles.length; i++)
            {
                try
                {
                    let e: any = linkEles[i];
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

    async Run(): Promise<string>
    {
        let fileData: any = null;

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
