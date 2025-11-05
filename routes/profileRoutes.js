const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.post('/', profileController.createProfile);
router.get('/:userId', profileController.getProfileByUserId);
router.put('/:userId', profileController.updateProfile);

module.exports = router;