const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

router.get('/user-full/:id', userController.getFullUserById);

module.exports = router;