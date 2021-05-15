const express = require('express');

const router = express.Router();

const countryEmissionsController = require('../controllers/country-emissions-controller')

router.get('/', countryEmissionsController.getAllCountryEmission);

module.exports = router;