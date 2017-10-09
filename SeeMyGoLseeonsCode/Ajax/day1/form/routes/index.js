var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/ajax', function(err) {
  if(err) throw  err
  console.log('数据库链接成功...')
})

var listSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String
})

var listModel = mongoose.model('List', listSchema, 'ajaxlist')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
// router.get('/test.html', function(req, res, next) {
//   var name = req.query.username
//   listModel.findOne({'username':name}).exec(function(err, data) {
//     if(err) throw err
//     if(data) {
//         res.send('1')
//     } else {
//         res.send('0')
//     }
//   })
// });

router.post('/save.html', function(req, res) {
    var email = req.body.email
    listModel.findOne({'email':email}).exec(function(err, data) {
        if(data) {
            res.status(200).send('1')
        } else {
            res.status(200).send('0')
        }
    })
})

module.exports = router;
