const CountryEmissionsApi = require('../models/country-emission-api');
const helper = require('../businesslogic/emissions-helper')

exports.getCountryEmissionByCountry = (req, res, next) => {
    let condition = [];
    if(req.query.country === undefined)
    {
        console.log("no country found in parameters")
        res.status(400).json({error: 'country filter is required'});
    }
    else
    {
        condition = helper(req.query);

        CountryEmissionsApi.aggregate([
            {
                "$match" : {
                    'geo_component.name': req.query.country
                }
            },
            {
                "$project" : {
                    "geo_component" : 1,
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
    }
};

exports.createCountryEmissions = (req,res,next)=>{
    try{
        let newData = JSON.stringify(req.body)

        const CountryEmissions = JSON.parse(newData);
        delete CountryEmissions._id;
        const country = new CountryEmissionsApi({
            geoComponent: CountryEmissions.geoComponent,
            emissions:CountryEmissions.emissions,
        });
        country.save()
            .then(()=>res.status(201).json({message: 'Objet enregistré !'}))
    }
    catch (e)
    {
        console.log("une erreur : " + e.message)
        res.status(400).json({error : e.message});
    }
};
