const CountryEmissionsApi = require('../models/country-emission-api');

exports.getCountryEmissionByCountry = (req, res, next) => {
    let condition = [];
    //TODO check params send and extract method (refactor filtering with next line)
    //const { country, date, gas_name } = req.query;
    for(let param in req.query){
        if(param == 'country') continue;
        if(param == 'date')
        {
            condition.push({ "$eq" : [ "$$emissions.date", parseInt(req.query.date) ] });
        }
        else
        {
            condition.push({ "$eq" : [ "$$emissions."+param, req.query[param] ] });
        }
    };
    console.log(condition);

    CountryEmissionsApi.aggregate([
        {
            "$match" : {
                'geoComponent.geoComponent_name': req.query.country
            }
        },
        {
            "$project" : {
                "geoComponent" : 1,
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

exports.getAllCountryEmission = (req, res, next) => {
    CountryEmissionsApi.find().then(
        (country_emissions_api) => {
            console.log("CountryEmissions api found")
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
