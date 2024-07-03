// server/routes/markers.js
const express = require('express');
const router = express.Router();
const markerController = require('../controllers/markerController');

// GET all markers
router.get('/', markerController.getAllMarkers);

// GET a single marker by ID
router.get('/:id', markerController.getMarkerById);

// POST create a new marker
router.post('/', markerController.createMarker);

// PUT update an existing marker by ID
router.put('/:id', markerController.updateMarker);

// DELETE delete a marker by ID
router.delete('/:id', markerController.deleteMarker);

module.exports = router;
