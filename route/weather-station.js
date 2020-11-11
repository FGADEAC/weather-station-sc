const express = require("express")
const router = express.Router();
const controller = require('../controller/weather-station');

router.get('/', controller.get);

module.exports = router;