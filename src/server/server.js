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
app.use(bodyParser.urlencoded({ extended: true }));

//keys for the various apis
const keys = {
    geonames: process.env.GEONAMES_USERNAME,
    weatherbit: process.env.WEATHERBIT_KEY,
    pixaby: process.env.PIXABY_KEY
}

//console.log(process.env.GEONAMES_HOST);

app.get('/', (req, res) => {
    res.sendFile("index.html", { root: "dist" })
});

app.get('/keyData', (req, res) => {
    res.send(keys);
})

app.use(express.static('dist'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    console.log(keys.geonames)
    console.log(keys.weatherbit)
    console.log(keys.pixaby)
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

app.post('/currentUserData', updatedSelection);

//function that takes the req.body and updates values in the currentData object
function updatedSelection(req, res) {

    //currentData.test = req.body.test;
    currentData = {
        key: req.body.key,
        place: req.body.place,
        state: req.body.state,
        country: req.body.country,
        lat: req.body.lat,
        long: req.body.long
    }
    allData.push(currentData);
    res.send(currentData);
    console.log(allData);

}

//Returns all userData
app.get('/allData', (req, res) => {
    res.send(allData);
})