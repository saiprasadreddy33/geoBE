// server/controllers/datasetController.js
const Dataset = require('../models/Dataset');

// Get all datasets
exports.getAllDatasets = async (req, res) => {
  try {
    const datasets = await Dataset.find();
    res.status(200).json(datasets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get dataset by ID
exports.getDatasetById = async (req, res) => {
  const { id } = req.params;

  try {
    const dataset = await Dataset.findById(id);
    if (!dataset) {
      return res.status(404).json({ message: 'Dataset not found' });
    }
    res.status(200).json(dataset);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new dataset
exports.createDataset = async (req, res) => {
  const { name, description, data } = req.body;

  try {
    const newDataset = new Dataset({ name, description, data });
    await newDataset.save();
    res.status(201).json({ message: 'Dataset created successfully', dataset: newDataset });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update dataset by ID
exports.updateDataset = async (req, res) => {
  const { id } = req.params;
  const { name, description, data } = req.body;

  try {
    const dataset = await Dataset.findById(id);
    if (!dataset) {
      return res.status(404).json({ message: 'Dataset not found' });
    }
    
    dataset.name = name;
    dataset.description = description;
    dataset.data = data;

    await dataset.save();
    res.status(200).json({ message: 'Dataset updated successfully', dataset });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete dataset by ID
exports.deleteDataset = async (req, res) => {
  const { id } = req.params;

  try {
    const dataset = await Dataset.findById(id);
    if (!dataset) {
      return res.status(404).json({ message: 'Dataset not found' });
    }

    await dataset.remove();
    res.status(200).json({ message: 'Dataset deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
