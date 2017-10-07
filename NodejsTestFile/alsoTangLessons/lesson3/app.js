/**
 * Created by Administrator on 2017/9/19.
 */
var express = require('express')
var cheerio = require('cheerio')
var superagent = require('superagent')
var mongoose = require('mongoose')
var eventproxy = require('eventproxy')
var url = require('url')

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

var model = mongoose.model('List', schema, 'anoList')

var app = express()
var ep = new eventproxy()

app.get('/', function(req, res, next){
    // 先定义好url这个变量方便后面的使用
    var cnUrl = 'https://cnodejs.org/'

    // 使用superagent去抓取https://cnodejs.org的内容
    superagent.get(cnUrl).end(function(err, sres){
        // 常规的错误处理
        if(err) return next(err)
        // sres.text里面存储着网页的html内容, 将它传给cheerio.load之后
		//就可以得到一个实现了jQuery接口的变量,我们习惯性将其命名为 '$'
        var $ = cheerio.load(sres.text)
        var items = []
        var topicUrls = []

        // 获取到爬取到的东西的内容, 使用cheerio
        $('#topic_list .topic_title').each((idx, element)=> {
            // 预定义一个变量,从而提升整体的程序性能
            var $element = $(element);
            var sunLink = url.resolve(cnUrl, $element.attr('href'))

            topicUrls.push(sunLink)



            // listModel.save((err) => {
            //     if(err) {
            //         throw err
            //     } else {
            //         console.log('保存成功...')
            //     }
            // })
        })

        ep.after('topic_html', topicUrls.length, function(topics){
            topics = topics.map(function(topicPair) {
                var $ = cheerio.load(topicPair[1])
                var listModel = new model()
                listModel.linkUrl = topicPair[0]
                listModel.title = $('.topic_full_title').text().split('置顶').join('').trim()
                listModel.author = $('.changes a').text().trim()
                listModel.save((err)=> {
                    if(err) {
                        throw err
                    } else {
                        console.log('写入成功...')
                    }
                })
            })
        })

        topicUrls.forEach(function (topicUrl) {
            superagent.get(topicUrl)
                .end(function (err, res) {
                    ep.emit('topic_html', [topicUrl, res.text]);
                });
        });

        model.find({}).exec(function(err, data) {
            res.send(data)
        })

    })
})

app.listen(8070, function() {
    console.log('服务器启动成功.. ')
})