var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Index' });
});
router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Express test' });
});

module.exports = router;
