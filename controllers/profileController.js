// controllers/profileController.js
const Profile = require('../models/Profile.model');

// GET /api/profiles/:userId
exports.getProfileByUserId = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.userId });
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/profiles
exports.createProfile = async (req, res) => {
  try {
    // Note : userId doit correspondre à un ID utilisateur SQL existant
    const { userId, preferences, history } = req.body;
    
    const existingProfile = await Profile.findOne({ userId: userId });
    if (existingProfile) {
      return res.status(400).json({ error: 'Profile already exists for this user' });
    }

    const newProfile = new Profile({
      userId,
      preferences,
      history,
    });
    
    await newProfile.save();
    res.status(201).json(newProfile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/profiles/:userId
exports.updateProfile = async (req, res) => {
  try {
    const { preferences, history } = req.body;
    
    const updatedProfile = await Profile.findOneAndUpdate(
      { userId: req.params.userId },
      { $set: { preferences: preferences, history: history } },
      { new: true, runValidators: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    
    res.status(200).json(updatedProfile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};