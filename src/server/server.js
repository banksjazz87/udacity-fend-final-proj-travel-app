const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3080;

//setting up an instance of .env
const dotenv = require('dotenv');
dotenv.config();

//adding middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//keys for the various apis
const keys = {
    geonames: process.env.GEONAMES_USERNAME,
    geoUrl: process.env.GEONAMES_URL,
    weatherbit: process.env.WEATHERBIT_KEY,
    weatherbitUrl: process.env.WEATHERBIT_URL,
    pixabay: process.env.PIXABAY_KEY,
    pixabayUrl: process.env.PIXABAY_URL,
    visCrossUrl: process.env.VISUALCROSSING_URL,
    visCrossKey: process.env.VISUALCROSSING_KEY
}

//static server
//app.use(express.static('dist'));
app.use(express.static(__dirname + '/dist'));


//sends the dist/index.html file when a get request is made to the root.
app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
});

//sends the key and URL data from the .env file
app.get('/keyData', (req, res) => {
    res.send(keys);
})

//A generic console.log statement to ensure that the server is running
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

//An empty array to hold all of the data that has been submitted
let allData = [];
let currentData = {};

//A post request that sends the allData array, when the a post request is made.
app.post("/allCurrentData", function(req, res) {
    currentData.place = req.body.place;
    currentData.state = req.body.state;
    currentData.country = req.body.country;
    currentData.lat = req.body.lat;
    currentData.long = req.body.long;
    currentData.startDate = req.body.startDate;
    currentData.endDate = req.body.endDate;
    currentData.picUrl = req.body.picUrl;
    currentData.weather = req.body.weatherInfo
    allData.push(currentData);
    res.send(allData);
})

//sends the allData array when a get request is made to /allCurrentData
app.get("/allCurrentData", (req, res) => {
    res.send(allData);
})

//Returns all userData
app.get('/allData', function(req, res) {
    res.send(allData);
})