
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

var model = mongoose.model('List', schema, 'xiuxiuList')

var app = express()
var ep = new eventproxy()

app.get('/', function(req, res, next){
    var rankList = 'https://www.ttt882.com/htm/piclist2/'
    var cnUrl = 'https://www.ttt882.com'
    superagent.get(rankList).end(function(err, sres){
        if(err) throw err
        var $ = cheerio.load(sres.text)
        var topicUrls = []
        console.log(sres.text)
        $('.pagination').find('a').each((idx, element)=> {
            // 预定义一个变量,从而提升整体的程序性能
            var $element = $(element);
            var sunLink = rankList+($element.attr('href'))
            topicUrls.push(sunLink)

    })
        topicUrls.forEach(function(topicUrl) {
            superagent.get(topicUrl).end(function(err, sres){
                if(err) throw err
                var $ = cheerio.load(sres.text)
                var imgUrls = []
                $('.channel').find('a').each(function(value) {
                    imgUrls.push(url.resolve(cnUrl,$(this).find('a').attr('href')))
                })
                imgUrls.forEach(function(imgUrl) {
                    superagent.get(imgUrl).end(function(err, sres){
                        if(err) throw err
                        var $ = cheerio.load(sres.text)
                        var imgs = []
                        $('.content').each(function(value) {
                            imgs.push(url.resolve(cnUrl,$(this).attr('src')))
                        })

                    })
                })

            })

        })
    })
})

app.listen(8060, function() {
    console.log('服务器启动成功.. ')
})