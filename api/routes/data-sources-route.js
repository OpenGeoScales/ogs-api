const express = require('express');

const router = express.Router();

const DataSourceController = require('../controllers/data-sources-controller')

router.get('/', DataSourceController.getAllDataSource);

module.exports = router;