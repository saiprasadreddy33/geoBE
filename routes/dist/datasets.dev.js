"use strict";

// server/routes/datasets.js
var express = require('express');

var router = express.Router();

var datasetController = require('../controllers/datasetController'); // GET all datasets


router.get('/', datasetController.getAllDatasets); // GET dataset by ID

router.get('/:id', datasetController.getDatasetById); // POST create a new dataset

router.post('/', datasetController.createDataset); // PUT update dataset by ID

router.put('/:id', datasetController.updateDataset); // DELETE delete dataset by ID

router["delete"]('/:id', datasetController.deleteDataset);
module.exports = router;
//# sourceMappingURL=datasets.dev.js.map
