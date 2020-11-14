const mongoose = require('mongoose');

const recoveredDataSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    //date: new Date, // todo implement date
    temperatura: {type:Number, required: false},
    presion_barometrica: {type:Number, required: false},
    humedad: {type:Number, required: false},
    luminosidad: {type:Number, required: false},
    precipitacion: {type:Number, required: false},
    velocidad_viento: {type:Number, required: false},
    direccion_viento: {type:String, required: false}
});

module.exports = mongoose.model('recoveredData',recoveredDataSchema);