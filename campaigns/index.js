var express = require('express');
var router  = express.Router();

// localhost:3001/api/campaigns/:IDdoJob/ pieces where job:id
router.get('/:id', require('./services/find'));

module.exports = router;
