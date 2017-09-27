var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')

mongoose.connect('mongoodb://127.0.0.1:2017/app', function(err) {
  if(err) {
    throw Error(err)
  } else {
    console.log('数据库链接成功...')
  }
})

// 定义好schema骨架
var appSchema = new mongoose.Schema({
    name: String,
    content: String
})

var appModel = mongoose.model('list', appSchema, 'list')

router.post('./comment.html', function(req, res, next) {
  
})







// var express = require('express');
// var router = express.Router();
// var mongoose = require('mongoose')
//
// mongoose.connect("mongodb://127.0.0.1:27017/test", function(err) {
//   if(err) {
//     throw Error(err)
//   } else {
//     console.log("数据库链接成功...")
//   }
// })
//
// var listSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     works: Array
// })
//
// var listModel = mongoose.model("list", listSchema, "list")
//
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//     // 直接查找,如果不传入值的话就是查找所有的内容
//     // listModel.find({name:"周杰伦"}, function(err, data) {
//     //   if(err) {
//     //     throw Error(err)
//     //   } else {
//     //     res.send(data)
//     //   }
//     // })
//
//     // 使用ID来进行查找
//     // listModel.findById('59c781d1920b3b7535b86788', function(err, data) {
//     //   if(err) {
//     //     throw Error(err)
//     //   } else {
//     //     res.send(data)
//     //   }
//     // })
//
//     // 查找一个
//     listModel.findOne({name: "周杰伦"}, function(err, data) {
//       if(err) {
//         throw Error(err)
//       } else {
//         res.send(data)
//       }
//     })
// });
//
// router.get('/add.html', function(req, res) {
//   // 利用模型创建实例
//     var list = new listModel()
//
//     // 向实例中添加数据
//     list.name = "张三"
//     list.age = "18"
//     list.works = ["张三的歌", "李四的歌"]
//     list.num = 16
//     list.sex = "男"
//
//     // 调用save方法保存新增的数据
//     list.save(function(err) {
//       if(err) {
//         throw Error(err)
//       } else {
//         res.send("添加成功")
//       }
//     })
// })
//
// module.exports = router;
