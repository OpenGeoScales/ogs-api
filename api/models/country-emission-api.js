const mongoose = require('mongoose');

const iso_code_schema = new mongoose.Schema({
        alpha2: {type: String, required: false},
        alpha3: {type: String, required: false}
    }
)

const properties_schema = new mongoose.Schema({
        area: {type: String, required: false}
    }
)

const geo_component_schema = new mongoose.Schema({
        scale : {type: String, required: true},
        name: {type: String, required: true},
        properties: {properties_schema, required: false},
        identifiers: {iso_code_schema, required: false}
    }
)

const emissions_schema = new mongoose.Schema({
        date: {type: String, required: true},
        sector: {type: String, required: true},
        gas: {type: String, required: true},
        value: {type: Number, required: true},
        unit: {type: String, required: true},
        data_source: {type: String, required: true},
    }
)

const country_emissions_api_schema = new mongoose.Schema({
        geo_component: geo_component_schema,
        emissions: [emissions_schema]
    },
    {versionKey: false});

module.exports = mongoose.model('country_emissions', country_emissions_api_schema);
