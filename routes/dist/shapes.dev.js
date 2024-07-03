"use strict";

// server/routes/shapes.js
var express = require('express');

var router = express.Router();

var shapeController = require('../controllers/shapeController'); // GET all shapes


router.get('/', shapeController.getAllShapes); // GET a single shape by ID

router.get('/:id', shapeController.getShapeById); // POST create a new shape

router.post('/', shapeController.createShape); // PUT update an existing shape by ID

router.put('/:id', shapeController.updateShape); // DELETE delete a shape by ID

router["delete"]('/:id', shapeController.deleteShape);
module.exports = router;
//# sourceMappingURL=shapes.dev.js.map
