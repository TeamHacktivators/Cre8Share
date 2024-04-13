const router = require('express').Router();

router.use('/usersAPI', require('./usersAPI'));
router.use('/creatorsAPI', require('./creatorsAPI'));

module.exports = router;