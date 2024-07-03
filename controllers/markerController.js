const Marker = require('../models/Marker');

exports.getAllMarkers = async (req, res) => {
  try {
    const markers = await Marker.find();
    res.status(200).json(markers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMarkerById = async (req, res) => {
  const { id } = req.params;

  try {
    const marker = await Marker.findById(id);
    if (!marker) {
      return res.status(404).json({ message: 'Marker not found' });
    }
    res.status(200).json(marker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createMarker = async (req, res) => {
  const { name, location } = req.body;

  try {
    const newMarker = new Marker({ name, location });
    await newMarker.save();
    res.status(201).json({ message: 'Marker created successfully', marker: newMarker });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateMarker = async (req, res) => {
  const { id } = req.params;
  const { name, location } = req.body;

  try {
    const marker = await Marker.findById(id);
    if (!marker) {
      return res.status(404).json({ message: 'Marker not found' });
    }
    
    marker.name = name;
    marker.location = location;

    await marker.save();
    res.status(200).json({ message: 'Marker updated successfully', marker });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteMarker = async (req, res) => {
  const { id } = req.params;

  try {
    const marker = await Marker.findById(id);
    if (!marker) {
      return res.status(404).json({ message: 'Marker not found' });
    }

    await marker.remove();
    res.status(200).json({ message: 'Marker deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
