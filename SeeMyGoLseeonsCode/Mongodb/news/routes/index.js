var express = require('express');
var router = express.Router();
var mongoose = require('./conn')

/* GET home page. */
router.get('/', function(req, res, next) {
    listModel.find({}).exec(function(err, data) {
      if(err) {
        throw Error(err)
      } else {
        console.log(data)
          res.render('index', { data:data });
      }
  })

});
router.get('/index.html', function(req, res, next) {
    listModel.find({}).exec(function(err, data) {
      if(err) {
        throw Error(err)
      } else {
        console.log(data)
          res.render('index', { data:data });
      }
  })

});

/* GET home page. */
router.get('/content.html', function(req, res, next) {
    // 获取传输过来的get中的id
    var id = req.query.id

    listModel.findById(id).exec(function(err, data) {
      if(err) {
        throw Error(err)
      } else {
        console.log(data)
          res.render('content', { data:data });
      }
  })

});

module.exports = router;
