'use strict';
var express = require('express');
var router = express.Router();


router.use('/user', require('./users'));
router.use('/todos', require('./todos'));



module.exports = router;