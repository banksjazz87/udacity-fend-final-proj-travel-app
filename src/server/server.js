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

//console.log(process.env.GEONAMES_HOST);

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
    //res.sendFile("index.html", { root: "dist" })
});

app.get('/keyData', (req, res) => {
    res.send(keys);
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    console.log(keys.geonames)
    console.log(keys.weatherbit)
    console.log(keys.pixabay)
    console.log(keys.visCrossUrl, keys.visCrossKey)
})

//An empty object to hold all of the data that is being pulled from the user and the various apis
/*let currentData = {
    key: '',
    place: '',
    state: '',
    lat: '',
    long: '',
    date: ''
}*/
let currentData = {};

//An empty array to hold all of the data that has been submitted
let allData = [];

app.post("/allCurrentData", function(req, res) {
    allData.push(req.body.values);
    res.send(allData);
    console.log(allData);
})

app.get("/allCurrentData", (req, res) => {
    res.send(allData);
    console.log(allData);
})

//Returns all userData
app.get('/allData', function(req, res) {
    res.send(allData);
    console.log(allData);
})