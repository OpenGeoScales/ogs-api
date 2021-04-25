const CountryEmissions = require('../models/country-emissions');

exports.getAllCountryEmission = (req, res, next) => {
    CountryEmissions.find().then(
        (country_emissions) => {
            console.log("CountryEmissions found")
            res.status(200).json(country_emissions);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};


