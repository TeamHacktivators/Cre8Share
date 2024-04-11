const router = require('express').Router();

router.use('/usersAPI', require('./usersAPI'));

module.exports = router;