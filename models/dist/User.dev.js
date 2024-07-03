"use strict";

// server/models/User.js
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
});
module.exports = mongoose.model('User', userSchema);
//# sourceMappingURL=User.dev.js.map
