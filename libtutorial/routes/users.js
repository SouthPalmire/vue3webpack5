var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/way', function(req, res, next) {
  res.send('есть только путь');
});

module.exports = router;
