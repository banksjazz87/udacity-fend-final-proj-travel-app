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
app.use(bodyParser.urlencoded({extended: true}));

//keys for the various apis
const keys = {
    geonames: process.env.GEONAMES_USERNAME,
    weatherbit: process.env.WEATHERBIT_KEY, 
    pixaby: process.env.PIXABY_KEY
}

//console.log(process.env.GEONAMES_HOST);

app.get('/', (req, res) => {
    res.sendFile("index.html", {root: "dist"})
});

app.use(express.static('dist'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    console.log(keys.geonames)
    console.log(keys.weatherbit)
    console.log(keys.pixaby)
})
