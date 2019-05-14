var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'fhtus123',
  database: 'jsman'
})

connection.connect();

router.post('/form', function (req, res) {
  // res.send("<h1>이메일 주소 :"+ req.body.email +"</h1>")
  res.render("email.ejs", { 'email': req.body.email })
})

router.post('/ajax', function (req, res) {
  // console.log(req.body)
  // var responseData = {'result':'ok','email':req.body.email}
  // res.json(responseData)

  var email = req.body.email;
  var responseData = {};

  var query = connection.query('select name from user where email="' + email + '"', function (err, rows) {
    if (err) throw err;
    if (rows[0]) {
      responseData.result = "ok";
      responseData.name = rows[0].name;
    } else {
      responseData.result = "none";
      responseData.name = '';
    }
    res.json(responseData);
  })
})

module.exports = router;