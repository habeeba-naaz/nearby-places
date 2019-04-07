require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const axios = require("axios");

const app = new express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.post("/", async (req, res) => {
    const url = "https://maps.googleapis.com/maps/api/place/textsearch/json"
    const fUrl = url + "?query=" + req.body.query + "&key=" + process.env.API_KEY + "&location=" + req.body.location + "&radius=" + req.body.radius;
    const result = await axios.get(fUrl);
    res.send(result.data);
});


app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}.`)
});
