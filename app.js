const bodyParse = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// conect DB
mongoose.connect("mongodb://localhost:27017/test",{useNewUrlParser:true}); // todo implement string connection as .env var
mongoose.Promise = global.Promise;

// middleware 
app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

// routes
const weatherStationRoute = require('./route/weather-station');
app.use('/weather-station',weatherStationRoute);

module.exports = app;