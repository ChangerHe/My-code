var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/provinceTest', function(err) {
  if(err) throw err
  console.log('数据库链接成功...')
})

var schema = new mongoose.Schema()

var listModel = mongoose.model('list', schema, 'scroll')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/getData.html', function(req, res) {
  var msg = req.body.msg
  listModel.find({"inherit": msg}).exec(function(err, data) {
    if(err) throw err
    res.send(data)
  })
})

router.get('/getScroll.html', function(req, res) {
  var msg = req.query.msg
  console.log(msg)
  // 产生一套随机数
  var num= Math.floor(Math.random() * 997)
  listModel.find({"num": num}).exec(function(err, data) {
    if(err) throw err
    res.send(data)
  })
})

module.exports = router;
