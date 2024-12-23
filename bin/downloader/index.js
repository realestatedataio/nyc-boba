import { default as RediNycBoba } from "../../index.js";
import minimist from "minimist";
import * as child_process from "child_process";
import * as fs from "fs";
const argv = minimist(process.argv.slice(2));
const ProcessZipFile = async (file, type) => {
    try {
        let folder = file.split("/");
        folder = folder && folder.length ? folder[folder.length - 1] : null;
        folder = folder ? folder.replace(".zip", "") : null;
        folder = folder ? process.env.REDI_BROWSER_DOWNLOAD_DIR + "/" + folder : null;
        if (folder === null || folder === undefined || folder === "") {
            throw new Error("No folder name present");
        }
        try {
            fs.mkdirSync(folder, { "recursive": true });
        }
        catch (e) {
            if (e.code !== "EEXIST") {
                console.error(e);
            }
        }
        child_process.spawnSync("unzip", ["-q", file, "-d", folder]);
        fs.writeFileSync(process.env.REDI_BROWSER_DOWNLOAD_DIR + "/nyc-boba-" + type + "-latest", folder);
    }
    catch (e) {
        console.error(e);
    }
};
const Run = async () => {
    let argDownloader = argv.hasOwnProperty("downloader") ? argv.downloader : null;
    argDownloader = argDownloader && argDownloader !== "" ? argDownloader : null;
    if (argDownloader === null) {
        console.error("Missing arg \"downloader\" must be provided");
        return;
    }
    let downloaderName = argDownloader.charAt(0).toUpperCase() + argDownloader.slice(1) + "Downloader";
    if (RediNycBoba.hasOwnProperty(downloaderName) === false || !(RediNycBoba[downloaderName])) {
        console.error("ERROR: Unknown downloader \"" + downloaderName + "\"");
        return;
    }
    let downloader = new RediNycBoba[downloaderName]();
    let file = await downloader.Run();
    console.log("Downloaded File: " + file);
    if (file.indexOf(".zip") !== -1) {
        await ProcessZipFile(file, argDownloader);
    }
};
Run();
