var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/guestbook', (err) => {
  if(err) {
    throw err
  } else {
    console.log('database is connected...')
  }
})

var schema = new mongoose.Schema({
    name: String,
    tel: Number,
    ctime: Date,
    content: String
})

var modle = mongoose.model('messages', schema, 'messages')

/* GET home page. */
router.get('/', function(req, res, next) {
  modle.find({}).exec(function(err, data) {
    res.render('index.ejs', {'data':data})
  })
});
router.post('/add.html', function(req, res, next) {
  var listModle = new modle()
    listModle.name = req.body.name
    listModle.tel = req.body.tel
    listModle.ctime = req.body.ctime.toLocaleString()
    listModle.content = req.body.content
    console.log(listModle.ctime)
    listModle.save()
    res.send("<script>alert('保存成功');location.href='./'</script>")
});

module.exports = router;
