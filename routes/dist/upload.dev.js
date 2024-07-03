"use strict";

// server/routes/upload.js
var express = require('express');

var router = express.Router();

var uploadController = require('../controllers/uploadController');

var fileUpload = require('express-fileupload'); // Middleware for file uploads


router.use(fileUpload()); // POST endpoint to upload a file

router.post('/', uploadController.uploadFile);
module.exports = router;
//# sourceMappingURL=upload.dev.js.map
