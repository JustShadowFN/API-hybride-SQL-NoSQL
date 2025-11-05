const User = require('../models/User.model');
const Profile = require('../models/Profile.model');

// GET /api/users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.getAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/users
exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    const newUser = await User.create(name, email);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// GET /api/user-full/:id
exports.getFullUserById = async (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10);
    if (isNaN(userId)) {
      return res.status(400).json({ error: 'Invalid user ID' });
    }

    const user = await User.getById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found in SQL database' });
    }

    const profile = await Profile.findOne({ userId: userId });

    const fullUserData = {
      user: user,
      profile: profile || null 
    };

    res.status(200).json(fullUserData);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};