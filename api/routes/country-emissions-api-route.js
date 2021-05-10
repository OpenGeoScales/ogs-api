const express = require('express');

const router = express.Router();

const countryEmissionsControllerApi = require('../controllers/country-emissions-api-controller')

router.get('/', countryEmissionsControllerApi.getCountryEmissionByCountry);
router.get('/', countryEmissionsControllerApi.getAllCountryEmission);
router.post('/',countryEmissionsControllerApi.createCountryEmissions);

module.exports = router;