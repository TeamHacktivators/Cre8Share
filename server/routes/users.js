const express= require('express');
const router= express.Router();
const usersController= require('../controllers/usersController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/signUp',usersController.signUP);

router.post('/signIn',usersController.signIN);

module.exports=router;