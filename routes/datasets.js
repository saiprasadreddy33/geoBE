// server/routes/datasets.js
const express = require('express');
const router = express.Router();
const datasetController = require('../controllers/datasetController');

// GET all datasets
router.get('/', datasetController.getAllDatasets);

// GET dataset by ID
router.get('/:id', datasetController.getDatasetById);

// POST create a new dataset
router.post('/', datasetController.createDataset);

// PUT update dataset by ID
router.put('/:id', datasetController.updateDataset);

// DELETE delete dataset by ID
router.delete('/:id', datasetController.deleteDataset);

module.exports = router;
