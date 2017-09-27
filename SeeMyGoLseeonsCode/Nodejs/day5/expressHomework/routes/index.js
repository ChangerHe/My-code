var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log(1)
  next()
  console.log(2)
});

router.get('/error', function(req, res, next) {
  res.render('error', { title: 'That is wrong' });
  console.log(3)
  next()
  console.log(4)
});

module.exports = router;
