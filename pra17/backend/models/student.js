const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  grade: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);