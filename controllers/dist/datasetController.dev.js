"use strict";

// server/controllers/datasetController.js
var Dataset = require('../models/Dataset'); // Get all datasets


exports.getAllDatasets = function _callee(req, res) {
  var datasets;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Dataset.find());

        case 3:
          datasets = _context.sent;
          res.status(200).json(datasets);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: _context.t0.message
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Get dataset by ID


exports.getDatasetById = function _callee2(req, res) {
  var id, dataset;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Dataset.findById(id));

        case 4:
          dataset = _context2.sent;

          if (dataset) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            message: 'Dataset not found'
          }));

        case 7:
          res.status(200).json(dataset);
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json({
            message: _context2.t0.message
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 10]]);
}; // Create a new dataset


exports.createDataset = function _callee3(req, res) {
  var _req$body, name, description, data, newDataset;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, description = _req$body.description, data = _req$body.data;
          _context3.prev = 1;
          newDataset = new Dataset({
            name: name,
            description: description,
            data: data
          });
          _context3.next = 5;
          return regeneratorRuntime.awrap(newDataset.save());

        case 5:
          res.status(201).json({
            message: 'Dataset created successfully',
            dataset: newDataset
          });
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          res.status(500).json({
            message: _context3.t0.message
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // Update dataset by ID


exports.updateDataset = function _callee4(req, res) {
  var id, _req$body2, name, description, data, dataset;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description, data = _req$body2.data;
          _context4.prev = 2;
          _context4.next = 5;
          return regeneratorRuntime.awrap(Dataset.findById(id));

        case 5:
          dataset = _context4.sent;

          if (dataset) {
            _context4.next = 8;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            message: 'Dataset not found'
          }));

        case 8:
          dataset.name = name;
          dataset.description = description;
          dataset.data = data;
          _context4.next = 13;
          return regeneratorRuntime.awrap(dataset.save());

        case 13:
          res.status(200).json({
            message: 'Dataset updated successfully',
            dataset: dataset
          });
          _context4.next = 19;
          break;

        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4["catch"](2);
          res.status(500).json({
            message: _context4.t0.message
          });

        case 19:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 16]]);
}; // Delete dataset by ID


exports.deleteDataset = function _callee5(req, res) {
  var id, dataset;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(Dataset.findById(id));

        case 4:
          dataset = _context5.sent;

          if (dataset) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            message: 'Dataset not found'
          }));

        case 7:
          _context5.next = 9;
          return regeneratorRuntime.awrap(dataset.remove());

        case 9:
          res.status(200).json({
            message: 'Dataset deleted successfully'
          });
          _context5.next = 15;
          break;

        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](1);
          res.status(500).json({
            message: _context5.t0.message
          });

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 12]]);
};
//# sourceMappingURL=datasetController.dev.js.map
