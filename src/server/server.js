const express = require('express');
const app = express();
const port = 3080;

//setting up an instance of .env
const dotenv = require('dotenv');
dotenv.config();

const keys = {
    geonames: process.env.GEONAMES_USERNAME,
    weatherbit: process.env.WEATHERBIT_KEY
}

//console.log(process.env.GEONAMES_HOST);

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
});

app.use(express.static('dist'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    console.log(keys.geonames)
    console.log(keys.weatherbit)
})
