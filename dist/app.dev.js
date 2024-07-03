"use strict";

// server/app.js
var express = require('express');

var mongoose = require('mongoose');

var cors = require('cors');

var dotenv = require('dotenv');

var markersRouter = require('./routes/markers');

var shapesRouter = require('./routes/shapes');

var uploadRouter = require('./routes/upload');

dotenv.config();
var app = express();
var port = process.env.PORT || 3001; // Middleware

app.use(cors());
app.use(express.json()); // Routes

app.use('/api/markers', markersRouter);
app.use('/api/shapes', shapesRouter);
app.use('/api/upload', uploadRouter); // MongoDB Connection

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true // Remove the useCreateIndex option as it's deprecated

}).then(function () {
  console.log('Connected to MongoDB'); // Start the server

  app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
  });
})["catch"](function (error) {
  console.error('Error connecting to MongoDB:', error.message);
}); // Error handling middleware

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
module.exports = app;
//# sourceMappingURL=app.dev.js.map
