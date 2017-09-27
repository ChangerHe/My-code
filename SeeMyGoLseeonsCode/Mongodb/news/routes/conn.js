'use strict'
var mongoose = require('mongoose')

//链接
mongoose.connect('mongodb://127.0.0.1:27017/news', function(err) {
    if(err) {
        throw err
    } else {
        console.log('数据库链接成功...')
    }
})

// 定义骨架
var listSchema = new mongoose.Schema({
    title: String,
    source: String,
    author: String,
    content: String,
    ctime:Date,
    hits: Number
})

// 创建模型
global.listModel = mongoose.model('list', listSchema, 'list')



module.exports=mongoose