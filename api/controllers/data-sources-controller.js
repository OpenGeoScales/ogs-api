const Datasource = require('../models/data-sources-model');

exports.getAllDataSource = (req, res, next) => {
    Datasource.find().then(
        (datasource) => {
            console.log(datasource.length + " Data sources ");
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


