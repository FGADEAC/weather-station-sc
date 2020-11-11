const bodyParse = require('body-parser');
const express = require('express');
const app = express();

// middleware 
app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

module.exports = app;