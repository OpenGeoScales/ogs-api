const express = require('express');

const router = express.Router();

const DataSourceController = require('../controllers/datasource-controller')

router.get('/', DataSourceController.getAllDataSource);

module.exports = router;