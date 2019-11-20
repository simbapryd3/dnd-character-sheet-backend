var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const fetch = require("node-fetch");


const app = express();
app.use(cors());

fetch("http://dnd5eapi.co/api/ability-scores/2", {
     method: "GET"
}).then(response => response.json()).then(json => {
    console.log(json)
})

app.listen(3000, () => {
    console.log("aye we here")
})