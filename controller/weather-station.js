const weatherStation = {};


weatherStation.get = (req, res) => {
    
    return res.status(200).json({
        message: "Hola mundo"
    })
};

weatherStation.post = (req, res) => {
    console.log(req.body)
    const sensor1 = req.body.sensor1;
    return res.status(200).json({
        message: `Hola mundo: ${sensor1}`
    })
};

module.exports = weatherStation;