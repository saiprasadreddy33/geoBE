"use strict";

// server/controllers/uploadController.js
var path = require('path');

exports.uploadFile = function _callee(req, res) {
  var file, uploadPath;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          if (!(!req.files || Object.keys(req.files).length === 0)) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: 'No files were uploaded'
          }));

        case 3:
          file = req.files.file;
          uploadPath = path.join(__dirname, '../uploads', file.name); // Define upload path
          // Move the uploaded file to the defined path

          _context.next = 7;
          return regeneratorRuntime.awrap(file.mv(uploadPath));

        case 7:
          // Respond with success message and file path
          res.status(200).json({
            message: 'File uploaded successfully',
            filePath: uploadPath
          });
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error('Error uploading file:', _context.t0);
          res.status(500).json({
            message: 'File upload failed',
            error: _context.t0.message
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};
//# sourceMappingURL=uploadController.dev.js.map
