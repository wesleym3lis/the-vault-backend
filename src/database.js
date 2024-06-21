const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  ssl: true, // SSL/TLS is enabled by default for MongoDB Atlas
  tlsAllowInvalidCertificates: false, // Ensure to validate the certificates
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connection stabilished');
});

module.exports = db;
