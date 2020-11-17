const recoveredData = require('../models/recoveredData');
const mongoose = require("mongoose");
const weatherStation = {};

// todo filter get request
weatherStation.get = (req, res) => {
    recoveredData.find()
    .then(result => {
        res.status(201).json({
          message: "GET",
          result: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
};

weatherStation.post = (req, res) => {
    
    const data = new recoveredData({
        _id: new mongoose.Types.ObjectId(),
        date: new Date(),
        temperatura: req.body.temperatura,
        presion_barometrica: req.body.presion_barometrica,
        humedad: req.body.humedad,
        luminosidad: req.body.luminosidad,
        precipitacion: req.body.precipitacion,
        velocidad_viento: req.body.velocidad_viento,
        direccion_viento: req.body.direccion_viento
    })

    data
        .save()
        .then(result => {
          res.status(201).json({
            message: "POST realizado",
            result: result
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
};

module.exports = weatherStation;
