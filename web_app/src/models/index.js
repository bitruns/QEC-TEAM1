/**
 * This module initializes our connection to mongo,
 * so other modules should import mongoose from this module
 * rather than importing mongoose directly.
 */

const mongoose = require('mongoose');
exports.mongoose = mongoose;

// mongo connection
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/QEC_2022';
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Failed to connect to MongoDB...", err));
mongoose.connection.on('error', err => console.error('Mongo error:', err));

// close DB connection on process exit
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log("Mongoose connnection disconnected due to application termination");
    process.exit(0);
  });
});

// careful not to require earlier because these models require this model to have decorated exports.mongoose already
Object.assign(exports, {
  ...require('./user'),
});
