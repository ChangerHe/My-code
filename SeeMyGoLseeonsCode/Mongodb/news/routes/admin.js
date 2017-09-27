var express = require('express');
var router = express.Router();
var mongoose = require('./conn')

router.post('/save_add.html', function(req, res, next) {
    // 接收客户端的post
    var title = req.body.title
    var source = req.body.source
    var author = req.body.author
    var content = req.body.content

    // 创建实体
    var list = new listModel()
    list.title = title
    list.source = source
    list.author = author
    list.content = content
    list.ctime = Date()
    list.hits = 1
    console.log(list.ctime)
    list.save((err) => {
        if(err) {
            throw Error(err)
        } else {
            res.send('<script>alert("保存成功");location.href="./"</script>')
    }
})
});

router.get('/', function(req, res) {
  // 读取所有数据
    listModel.find({}).sort({'ctime': -1}).exec((err, data) => {
        res.render('newslist.ejs', {
            data:data
        })
    })
})

router.get('/delete_data.html', function(req, res) {
  // 获取到get的id
    var id = req.query.id
    console.log(id)
  // 读取所有数据
    listModel.findById(id).exec((err, data) => {
        data.remove(function(err) {
          if(err) {
            throw Error(err)
          }
    })
        res.send('<script>alert("删除成功");location.href="./"</script>')
    })
})

// 修改数据的值
router.get('/change_data.html', function(req, res) {
  // 获取到get的id
    var id = req.query.id
    console.log(id)
  // 读取所有数据,
    listModel.findById(id).exec(function(err, data) {
        res.render('change.ejs', {
            data
        })
    })
})



module.exports = router;
