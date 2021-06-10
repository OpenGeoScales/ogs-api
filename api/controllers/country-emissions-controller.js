const CountryEmissionsApi = require('../models/country-emission-api');
const helper = require('../businesslogic/emissions-helper')
//TODO : change file name to fit the good use case
exports.getAllCountryEmission = (req, res, next) => {
    let condition = [];

    //TODO : if all parameters are not passed threw error : "You must define all filters"
    condition = helper(req.query);

    CountryEmissionsApi.aggregate([
        {
            "$project" : {
                "geo_component" : true,
                "emissions" : {
                    "$filter" : {
                        "input" : "$emissions",
                        "as" : "emissions",
                        "cond" : {
                            "$and" : condition
                        }
                    }
                }
            }
        }
    ]).then(
        (country_emissions_api) => {
            console.log(country_emissions_api.length + " CountryEmissions for country " + req.query.country + " api found");
            res.status(200).json(country_emissions_api);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );

};



