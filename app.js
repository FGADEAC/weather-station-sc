const bodyParse = require('body-parser');
const express = require('express');
const app = express();

// middleware 
app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

// routes
const weatherStationRoute = require('./route/weather-station');
app.use('/weather-station',weatherStationRoute);

module.exports = app;