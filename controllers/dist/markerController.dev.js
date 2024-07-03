"use strict";

// server/controllers/markerController.js
var Marker = require('../models/Marker');

exports.getAllMarkers = function _callee(req, res) {
  var markers;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Marker.find());

        case 3:
          markers = _context.sent;
          res.status(200).json(markers);
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
};

exports.getMarkerById = function _callee2(req, res) {
  var id, marker;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Marker.findById(id));

        case 4:
          marker = _context2.sent;

          if (marker) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            message: 'Marker not found'
          }));

        case 7:
          res.status(200).json(marker);
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
};

exports.createMarker = function _callee3(req, res) {
  var _req$body, name, location, newMarker;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, location = _req$body.location;
          _context3.prev = 1;
          newMarker = new Marker({
            name: name,
            location: location
          });
          _context3.next = 5;
          return regeneratorRuntime.awrap(newMarker.save());

        case 5:
          res.status(201).json({
            message: 'Marker created successfully',
            marker: newMarker
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
};

exports.updateMarker = function _callee4(req, res) {
  var id, _req$body2, name, location, marker;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, name = _req$body2.name, location = _req$body2.location;
          _context4.prev = 2;
          _context4.next = 5;
          return regeneratorRuntime.awrap(Marker.findById(id));

        case 5:
          marker = _context4.sent;

          if (marker) {
            _context4.next = 8;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            message: 'Marker not found'
          }));

        case 8:
          marker.name = name;
          marker.location = location;
          _context4.next = 12;
          return regeneratorRuntime.awrap(marker.save());

        case 12:
          res.status(200).json({
            message: 'Marker updated successfully',
            marker: marker
          });
          _context4.next = 18;
          break;

        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](2);
          res.status(500).json({
            message: _context4.t0.message
          });

        case 18:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 15]]);
};

exports.deleteMarker = function _callee5(req, res) {
  var id, marker;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(Marker.findById(id));

        case 4:
          marker = _context5.sent;

          if (marker) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            message: 'Marker not found'
          }));

        case 7:
          _context5.next = 9;
          return regeneratorRuntime.awrap(marker.remove());

        case 9:
          res.status(200).json({
            message: 'Marker deleted successfully'
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
//# sourceMappingURL=markerController.dev.js.map
