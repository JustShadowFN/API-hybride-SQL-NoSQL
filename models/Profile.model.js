const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  book: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  comment: { type: String }
});

const profileSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
    unique: true 
  },
  preferences: {
    type: [String],
    default: []
  },
  history: {
    type: [historySchema],
    default: []
  }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;