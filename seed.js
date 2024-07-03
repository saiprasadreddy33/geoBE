// seed.js

const mongoose = require('mongoose');
const Shape = require('./models/Shape'); // Adjust the path as per your project structure

async function insertShape() {
  try {
    await mongoose.connect('mongodb+srv://watto:Saiprasadreddy@cluster0.tz7kuxn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    });

    const newPolygon = new Shape({
      type: 'Polygon',
      coordinates: [
        [
          [-122.408005, 37.788734],
          [-122.408005, 37.813776],
          [-122.380979, 37.813776],
          [-122.380979, 37.788734],
          [-122.408005, 37.788734]
        ]
      ]
    });

    const savedShape = await newPolygon.save();
    console.log('Saved Shape:', savedShape);
  } catch (error) {
    console.error('Error inserting shape:', error.message);
  } finally {
    mongoose.disconnect();
  }
}

insertShape();
