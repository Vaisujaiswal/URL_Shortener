// vaishnavijaiswal707
// H6xqthrkBP64IjMh

import express from "express";
import mongoose from "mongoose";
import { shortUrl, getOrignalUrl } from "./controller/url.js";

const app = express()
const port = 3000;

mongoose.connect("mongodb+srv://vaishnavijaiswal707:H6xqthrkBP64IjMh@cluster0.zgxms7k.mongodb.net/", {dbName: "Nodejs_form_DB"}).then(() => console.log("DB is Connected")).catch((err) => console.log(err));

app.use(express.urlencoded({extended:true}))

app.get("/", (req,res) => {
    res.render("index.ejs", {shortUrl: null})
});

app.post("/short", shortUrl)

app.get("/:shortCode", getOrignalUrl)

app.listen(port, (req, res) => {
    console.log(`App os listing at port ${port}`)
});