"use strict";

// server/routes/markers.js
var express = require('express');

var router = express.Router();

var markerController = require('../controllers/markerController'); // GET all markers


router.get('/', markerController.getAllMarkers); // GET a single marker by ID

router.get('/:id', markerController.getMarkerById); // POST create a new marker

router.post('/', markerController.createMarker); // PUT update an existing marker by ID

router.put('/:id', markerController.updateMarker); // DELETE delete a marker by ID

router["delete"]('/:id', markerController.deleteMarker);
module.exports = router;
//# sourceMappingURL=markers.dev.js.map
