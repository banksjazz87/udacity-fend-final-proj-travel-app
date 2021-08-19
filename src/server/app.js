const express = require('express');
const app = express();

//This get request is similar to the one made in server.js, but is neccessary for testing.
app.get('/', (req, res) => {
    res.status(200).send("Hello World")
})

export { app }