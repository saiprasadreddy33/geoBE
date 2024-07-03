"use strict";

// server/models/Marker.js
var mongoose = require('mongoose');

var markerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      "enum": ['Point'],
      // Only allow 'Point' type for now
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
markerSchema.index({
  location: '2dsphere'
}); // Index for geospatial queries

module.exports = mongoose.model('Marker', markerSchema);
//# sourceMappingURL=Marker.dev.js.map
