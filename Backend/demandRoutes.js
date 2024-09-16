const express = require('express');
const router = express.Router();
const { predictDemand } = require('../controllers/demandForecastController');

// Route to predict demand
router.post('/predict', predictDemand);

module.exports = router;
