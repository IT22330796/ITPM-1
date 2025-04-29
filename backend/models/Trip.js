// backend/models/Trip.js
const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  members: {
    type: [String], // An array of member names or IDs
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  details: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Trip', tripSchema);
