// Geo-main/server/routes/upload.js
const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');

// POST endpoint to upload a file
router.post('/', uploadController.uploadFile);

// GET endpoint to fetch all uploaded files
router.get('/', uploadController.getFiles);

// DELETE endpoint to delete a file
router.delete('/:id', uploadController.deleteFile);

module.exports = router;
