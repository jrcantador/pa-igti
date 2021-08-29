const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const personController = require('../controllers/personController')
const authController = require('../controllers/authController');
const authService = require('../services/authenticationService');
const multer = require('multer');

const upload = multer({ dest: './uploads/' });

// User
router.get('/user', authService.validationToken, userController.find);
router.post('/user', userController.create);
router.put('/user/:id', authService.validationToken, userController.update);
router.delete('/user/:id', authService.validationToken, userController.remove);

// Person
router.get('/person', authService.validationToken, personController.find);
router.post('/person', [authService.validationToken, upload.single('file')], personController.create);
router.post('/person/datatable', authService.validationToken, personController.dataTable);
router.put('/person/:id', authService.validationToken, personController.update);
router.delete('/person/:id', authService.validationToken, personController.remove);

router.post('/person/image-upload', [authService.validationToken, upload.single('file')], personController.imageUpload);
//Authentication
router.post('/login', authController.authentication);

module.exports = router;