var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test', function(err) {
  if(err) {
    throw err
  } else {
    console.log('数据库连接成功....')
  }
})

var schema = new mongoose.Schema({
  num: String
})

var listModel = mongoose.model('list', schema, 'list')

/* GET users listing. */

router.get('/getJson.html', function(req, res) {
    listModel.find().sort({"num": 1}).exec((err, data) => {
      if (err) throw err
        res.send(data)
  })
});
module.exports = router;
