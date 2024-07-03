// server/controllers/uploadController.js

const multer = require('multer');
const path = require('path');
const fs = require('fs');
const File = require('../models/Upload'); // Assuming you have a File model

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadsDir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir);
    }
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// Create Multer upload instance
const upload = multer({ storage });

// Handle file upload
exports.uploadFile = async (req, res) => {
  upload.single('file')(req, res, async (err) => {
    if (err) {
      console.error('Error uploading file:', err);
      return res.status(500).json({ message: 'File upload failed', error: err.message });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'No files were uploaded' });
    }

    const allowedExtensions = ['.json', '.geojson', '.kml', '.tiff'];
    const ext = path.extname(req.file.originalname).toLowerCase();

    if (!allowedExtensions.includes(ext)) {
      fs.unlinkSync(req.file.path); // Delete unsupported file
      return res.status(400).json({ message: 'Unsupported file format' });
    }

    // Save file metadata to database
    const fileMetadata = {
      filename: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
      path: req.file.path,
      createdAt: new Date(),
    };

    try {
      const savedFile = await File.create(fileMetadata);
      res.status(200).json({ message: 'File uploaded successfully', file: savedFile });
    } catch (error) {
      console.error('Error saving file metadata:', error);
      res.status(500).json({ message: 'File upload failed', error: error.message });
    }
  });
};

// Fetch all uploaded files
exports.getFiles = async (req, res) => {
  try {
    const files = await File.find();

    // Read file content for each file
    const filesWithContent = await Promise.all(files.map(async file => {
      const filePath = path.resolve(__dirname, '../uploads', file.filename);
      const content = fs.readFileSync(filePath, 'utf-8');
      return { ...file.toObject(), content };
    }));

    res.status(200).json(filesWithContent);
  } catch (error) {
    console.error('Error fetching files:', error);
    res.status(500).json({ message: 'Failed to fetch files', error: error.message });
  }
};

// Delete a file
exports.deleteFile = async (req, res) => {
  try {
    const fileId = req.params.id;
    const deletedFile = await File.findByIdAndDelete(fileId);

    if (!deletedFile) {
      return res.status(404).json({ message: 'File not found' });
    }

    // Delete the file from the uploads directory
    fs.unlinkSync(deletedFile.path);

    res.status(200).json({ message: 'File deleted successfully', file: deletedFile });
  } catch (error) {
    console.error('Error deleting file:', error);
    res.status(500).json({ message: 'Failed to delete file', error: error.message });
  }
};
