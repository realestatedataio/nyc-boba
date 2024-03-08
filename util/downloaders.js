import { default as RediNycBoba } from "../index.js";




const Run = async () =>
{
    console.log(RediNycBoba);

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
};

Run();
