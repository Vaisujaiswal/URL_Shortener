import dotenv, { config } from"dotenv";
dotenv.config()
import express from "express";
import mongoose from "mongoose";
import { shortUrl, getOrignalUrl } from "./controller/url.js";

const app = express()
const port = process.env.PORT;

mongoose.connect(process.env.MONGODB_URL, {dbName: "Nodejs_form_DB"}).then(() => console.log("DB is Connected")).catch((err) => console.log(err));

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));


app.get("/", (req,res) => {
    res.render("index.ejs", {shortUrl: null})
});

app.post("/short", shortUrl)

app.get("/:shortCode", getOrignalUrl)

app.listen(port, (req, res) => {
    console.log(`App os listing at port ${port}`)
});