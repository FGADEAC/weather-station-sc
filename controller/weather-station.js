const weatherStation = {};


weatherStation.get = (req, res) => {
    
    return res.status(200).json({
        message: "Hola mundo"
    })
};

module.exports = weatherStation;