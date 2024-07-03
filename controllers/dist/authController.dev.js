"use strict";

// server/controllers/authController.js
var jwt = require('jsonwebtoken');

var bcrypt = require('bcryptjs');

var User = require('../models/User'); // Function to generate JWT token


var generateToken = function generateToken(user) {
  return jwt.sign({
    id: user._id
  }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });
};

exports.signup = function _callee(req, res) {
  var _req$body, username, email, password, existingUser, hashedPassword, newUser, token;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 4:
          existingUser = _context.sent;

          if (!existingUser) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: 'User already exists'
          }));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 10));

        case 9:
          hashedPassword = _context.sent;
          // Create new user
          newUser = new User({
            username: username,
            email: email,
            password: hashedPassword
          });
          _context.next = 13;
          return regeneratorRuntime.awrap(newUser.save());

        case 13:
          // Generate token
          token = generateToken(newUser);
          res.status(201).json({
            message: 'User created successfully',
            token: token
          });
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](1);
          res.status(500).json({
            message: _context.t0.message
          });

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 17]]);
};

exports.login = function _callee2(req, res) {
  var _req$body2, email, password, user, isMatch, token;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 4:
          user = _context2.sent;

          if (user) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            message: 'User not found'
          }));

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 9:
          isMatch = _context2.sent;

          if (isMatch) {
            _context2.next = 12;
            break;
          }

          return _context2.abrupt("return", res.status(401).json({
            message: 'Incorrect password'
          }));

        case 12:
          // Generate token
          token = generateToken(user);
          res.status(200).json({
            message: 'Login successful',
            token: token
          });
          _context2.next = 19;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json({
            message: _context2.t0.message
          });

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 16]]);
};
//# sourceMappingURL=authController.dev.js.map
