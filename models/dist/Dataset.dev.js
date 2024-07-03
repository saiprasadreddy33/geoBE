"use strict";

// server/models/Dataset.js
var mongoose = require('mongoose');

var datasetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
});
module.exports = mongoose.model('Dataset', datasetSchema);
//# sourceMappingURL=Dataset.dev.js.map
