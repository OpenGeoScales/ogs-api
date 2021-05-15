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
        scale_name: {type: String, required: true},
        geoComponent_name: {type: String, required: true},
        iso_code: iso_code_schema,
        properties: {properties_schema, required: false}
    }
)

const emissions_schema = new mongoose.Schema({
        date: {type: Number, required: true},
        sector_name: {type: String, required: true},
        subsector_name: {type: String, required: true},
        gas_name: {type: String, required: true},
        value: {type: Number, required: true},
        unit: {type: String, required: true},
        data_source_name: {type: String, required: true},
    }
)

const country_emissions_api_schema = new mongoose.Schema({
        geoComponent: geo_component_schema,
        emissions: [emissions_schema]
    },
    {versionKey: false});

module.exports = mongoose.model('test', country_emissions_api_schema);
