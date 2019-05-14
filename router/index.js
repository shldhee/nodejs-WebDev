var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var home = require('./home/home')
var main = require('./main/main')
var email = require('./email/email')
var join = require('./join/index')

router.use('/', home);
router.use('/main', main);
router.use('/email', email);
router.use('/join', join);

module.exports = router;