const Shape = require('../models/Shape');

exports.getAllShapes = async (req, res) => {
  try {
    const shapes = await Shape.find();
    res.json(shapes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getShapeById = async (req, res) => {
  try {
    const shape = await Shape.findById(req.params.id);
    if (!shape) return res.status(404).json({ message: 'Shape not found' });
    res.json(shape);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getShapeById = async (req, res) => {
  try {
    const shape = await Shape.findById(req.params.id);
    if (!shape) return res.status(404).json({ message: 'Shape not found' });
    res.json(shape);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createShape = async (req, res) => {
  const { type, coordinates } = req.body;
  console.log('Received shape data:', JSON.stringify(req.body, null, 2)); // Detailed log

  try {
    const shape = new Shape({ type, coordinates });
    const newShape = await shape.save();
    res.status(201).json({ shape: newShape });
  } catch (err) {
    console.error('Error creating shape:', err.message); // Debugging log
    res.status(400).json({ message: err.message });
  }
};

exports.updateShape = async (req, res) => {
  try {
    const shape = await Shape.findById(req.params.id);
    if (!shape) return res.status(404).json({ message: 'Shape not found' });

    shape.type = req.body.type;
    shape.coordinates = req.body.coordinates;

    const updatedShape = await shape.save();
    res.json(updatedShape);
  } catch (err) {
    console.error('Error updating shape:', err.message); // Debugging log
    res.status(400).json({ message: err.message });
  }
};

exports.deleteShape = async (req, res) => {
  try {
    const shape = await Shape.findById(req.params.id);
    if (!shape) return res.status(404).json({ message: 'Shape not found' });

    await shape.remove();
    res.json({ message: 'Shape deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
