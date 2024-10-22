import { default as RediNycBoba } from "../../index.js";
import minimist from "minimist";
const argv = minimist(process.argv.slice(2));
const Run = async () => {
    let argDownloader = argv.hasOwnProperty("downloader") ? argv.downloader : null;
    argDownloader = argDownloader && argDownloader !== "" ? argDownloader : null;
    if (argDownloader === null) {
        console.error("Missing arg \"downloader\" must be provided");
        return;
    }
    if (RediNycBoba.hasOwnProperty(argDownloader) === false || !(RediNycBoba[argDownloader])) {
        console.error("ERROR: Unknown downloader \"" + argDownloader + "\"");
        return;
    }
    let downloader = new RediNycBoba[argDownloader]();
    let file = await downloader.Run();
    /*
    let padDownloader = new RediNycBoba.PadDownloader();
    let padFile = await padDownloader.Run();
    console.log("PAD downloaded to: " + padFile);

    let plutoDownloader = new RediNycBoba.PlutoDownloader();
    let plutoFile = await plutoDownloader.Run();
    console.log("PLUTO downloaded to: " + plutoFile);

    let mapPlutoDownloader = new RediNycBoba.MapPlutoDownloader();
    let mapPlutoFile = await mapPlutoDownloader.Run();
    console.log("MAP PLUTO downloaded to: " + mapPlutoFile);

    let sndDownloader = new RediNycBoba.SndDownloader();
    let sndFile = await sndDownloader.Run();
    console.log("SND downloaded to: " + sndFile);
    */
};
Run();
