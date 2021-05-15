const mongoose = require('mongoose');

const country_emissions_schema = mongoose.Schema({
    geoComponent_id: { type: String, required: true },
    geoComponent_name: { type: String, required: true },
    date: { type: String, required: true },
    datasource_id: { type: String, required: true },
    sector_id: { type: String, required: true },
    gas_id: { type: String, required: true },
    value: { type: Number, required: true },
});

module.exports = mongoose.model('country-emissions', country_emissions_schema);
