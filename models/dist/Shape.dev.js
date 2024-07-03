"use strict";

// server/models/Shape.js
var mongoose = require('mongoose');

var shapeSchema = new mongoose.Schema({
  type: {
    type: String,
    "enum": ['Polygon', 'LineString', 'Point'],
    // Example types, adjust as needed
    required: true
  },
  coordinates: {
    type: {
      type: String,
      "enum": ['Point', 'LineString', 'Polygon'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
});
shapeSchema.index({
  coordinates: '2dsphere'
}); // Index for geospatial queries

module.exports = mongoose.model('Shape', shapeSchema);
//# sourceMappingURL=Shape.dev.js.map
