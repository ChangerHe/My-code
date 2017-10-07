/**
 * Created by Administrator on 2017/9/19.
 */
var express = require('express')
var cheerio = require('cheerio')
var superagent = require('superagent')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/cnodejs',function(err) {
    if(err) {
        throw err
    } else {
        console.log('服务器连接成功...')
    }
})

var schema = new mongoose.Schema({
    title: String,
    href: String
})

var model = mongoose.model('List', schema, 'list')

var app = express()

app.get('/', function(req, res, next){
    // 使用superagent去抓取https://cnodejs.org的内容
    superagent.get('https://cnodejs.org/').end(function(err, sres){
        // 常规的错误处理
        if(err) return next(err)
        // sres.text里面存储着网页的html内容, 将它传给cheerio.load之后
		//就可以得到一个实现了jQuery接口的变量,我们习惯性将其命名为 '$'
        var $ = cheerio.load(sres.text)
        var items = []

        // 获取到爬取到的东西的内容, 使用cheerio
        $('#topic_list .topic_title').each((idx, element)=> {
            // 预定义一个变量,从而提升整体的程序性能
            var $element = $(element);
            var listModel = new model()
            listModel.title = $element.attr('title')
            listModel.href = $element.attr('href')
            console.log($element)

            listModel.save((err) => {
                if(err) {
                    throw err
                } else {
                    console.log('保存成功...')
                }
            })
        })



        res.send(items)
    })
})

app.listen(8090, function() {
    console.log('服务器启动成功.. ')
})