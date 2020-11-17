const bodyParse = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

// conect DB
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true}); // todo implement string connection as .env var
mongoose.Promise = global.Promise;

// middleware 
app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

// routes
const weatherStationRoute = require('./route/weather-station');
app.use('/weather-station',weatherStationRoute);

module.exports = app;