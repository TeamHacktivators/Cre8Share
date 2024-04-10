const express = require('express');

const router= express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use('/api',require('./api'));
router.use('/users',require('./users'));

module.exports=router;