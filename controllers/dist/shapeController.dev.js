"use strict";

// server/controllers/shapeController.js
var Shape = require('../models/Shape');

exports.getAllShapes = function _callee(req, res) {
  var shapes;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Shape.find());

        case 3:
          shapes = _context.sent;
          res.status(200).json(shapes);
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

exports.getShapeById = function _callee2(req, res) {
  var id, shape;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Shape.findById(id));

        case 4:
          shape = _context2.sent;

          if (shape) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            message: 'Shape not found'
          }));

        case 7:
          res.status(200).json(shape);
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

exports.createShape = function _callee3(req, res) {
  var _req$body, type, coordinates, newShape;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, type = _req$body.type, coordinates = _req$body.coordinates;
          _context3.prev = 1;
          newShape = new Shape({
            type: type,
            coordinates: coordinates
          });
          _context3.next = 5;
          return regeneratorRuntime.awrap(newShape.save());

        case 5:
          res.status(201).json({
            message: 'Shape created successfully',
            shape: newShape
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

exports.updateShape = function _callee4(req, res) {
  var id, _req$body2, type, coordinates, shape;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, type = _req$body2.type, coordinates = _req$body2.coordinates;
          _context4.prev = 2;
          _context4.next = 5;
          return regeneratorRuntime.awrap(Shape.findById(id));

        case 5:
          shape = _context4.sent;

          if (shape) {
            _context4.next = 8;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            message: 'Shape not found'
          }));

        case 8:
          shape.type = type;
          shape.coordinates = coordinates;
          _context4.next = 12;
          return regeneratorRuntime.awrap(shape.save());

        case 12:
          res.status(200).json({
            message: 'Shape updated successfully',
            shape: shape
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

exports.deleteShape = function _callee5(req, res) {
  var id, shape;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(Shape.findById(id));

        case 4:
          shape = _context5.sent;

          if (shape) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            message: 'Shape not found'
          }));

        case 7:
          _context5.next = 9;
          return regeneratorRuntime.awrap(shape.remove());

        case 9:
          res.status(200).json({
            message: 'Shape deleted successfully'
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
//# sourceMappingURL=shapeController.dev.js.map
