const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    service: {
        type: String,
        required: true,
        unique: false,
      },
    username: {
        type: String,
        required: true,
        unique: false,
      },
    password: {
        type: String,
        required: false,
    },    
});

const Record = mongoose.model('Record', recordSchema);

module.exports = Record;