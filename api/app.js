const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const swaggerUi = require("swagger-ui-express");

const countryEmissionsRoutes = require('./routes/country-emmissions');
const countryEmissionsRoutesAPÏ = require('./routes/country-emissions-api-route');
const dataSources = require('./routes/data-sources-route');

mongoose.connect('mongodb+srv://OpenGeoScaleApi:5PQ8qB3Tx4BqBZV@cluster0.pbpit.mongodb.net/ogs-prod-emissions?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyParser.json());

//TODO : check and refine routes url
app.use('/api/country', countryEmissionsRoutes);
app.use('/api/country-emissions', countryEmissionsRoutesAPÏ);
app.use('/api/data-sources', dataSources);

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;