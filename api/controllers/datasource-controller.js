const Datasource = require('../models/datasource');

exports.getAllDataSource = (req, res, next) => {
    Datasource.find().then(
        (datasource) => {
            console.log("CountryEmissions V2 found")
            res.status(200).json(datasource);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};


