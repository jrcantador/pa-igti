const express = require ('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const authService = require('../services/authenticationService');

// User
router.get('/user', authService.validationToken, userController.find);
router.post('/user', authService.validationToken, userController.create);
router.put('/user/:id', authService.validationToken, userController.update);
router.delete('/user/:id', authService.validationToken, userController.remove);

//Authentication
router.post('/login', authController.authentication);

module.exports = router;