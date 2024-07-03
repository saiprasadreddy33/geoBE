const mongoose = require('mongoose');

const shapeSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Polygon', 'LineString'],
    required: true
  },
  coordinates: {
    type: [[[Number]]], // Array of arrays of arrays of numbers
    required: true
  }
}, {
  timestamps: true
});

shapeSchema.index({ coordinates: '2dsphere' });

module.exports = mongoose.model('Shape', shapeSchema);
