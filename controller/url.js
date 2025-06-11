import shortid from "shortid";
import { Url } from "../models/Url.js";


export const shortUrl = async(req, res) => {
    const longUrl = req.body.longUrl;
    console.log(longUrl);
    const shortCode = shortid.generate()
    const shortUrl = `http://localhost:3000/${shortCode}`

    const newUrl = new Url({shortCode, longUrl});
    await newUrl.save()

    console.log(`short save = ${newUrl}`)
    res.render("index.ejs", {shortUrl})
};


export const getOrignalUrl = async(req,res) => {
    const shortCode =  req.params.shortCode;
    const OrignalUrl = await Url.findOne({shortCode})

    if(OrignalUrl){
        res.redirect(OrignalUrl.longUrl)
    }else{
        res.json({message: "Invalide"})
    }
}