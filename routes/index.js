var express = require('express');
var router = express.Router();
const db = require('../database');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'ExpressJS' });
});

module.exports = router;
