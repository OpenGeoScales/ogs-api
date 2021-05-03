const CountryEmissionsApi = require('../models/country-emission-api');

exports.getCountryEmissionByCountry = (req, res, next) => {
    CountryEmissionsApi.find({'geoComponent.geoComponent_name': req.query.country}).then(
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
