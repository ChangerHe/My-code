const http = require('http')
const cheerio = require('cheerio')
const fs = require('fs')
const querystring = require('querystring')

// 目标: 定义一个函数,将解析到的html代码进行分析,爬取出需要的信息

var url = 'http://www.imooc.com/learn/348'
/*
* 提取的内容包括:
*   chapTitle  章节的标题
*   videos     视频的信息
*   视频的标题 title
*   视频的id   id
* */
function spider(html) {
    // 使用$符来实现类似于jQuery的操作
    var $ = cheerio.load(html)

    // 预先定义好爬取的区域
    var chapters = $('.mod-chapters')

    // 将每个地方的所需内容提取出来
    // 先定义一个数组存储内容
    var courseData = []

    chapters.find('.chapter').each(function(item) {
        var chapter = $(this)

        // 提取章节的标题
        var chapterTitle = chapter.find('.chapter strong').text().split('\n').join('').trim()

        // 提取小节中的视频的信息
        var videos = chapter.find('.video')
        // 将得到的内容组成一个对象
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        }

        videos.find('.J-media-item').each(function(item) {

            // 获取到video的标签
            var video = $(this)

            // 得到小节视频的标题文字
            var videoTitle = video.text().split('\n').join('').trim()

            // console.log(videoTitle)

            // 获取视频的id
            var id = video.attr('href').split('/video/')[1].trim()

            chapterData.videos.push({
                title: videoTitle,
                id: id
            })

        })

        courseData.push(chapterData)

    })

    courseData = JSON.stringify(courseData)

    return courseData
}



http.get(url, function(res){
    var html = ''

    res.on('data', function(data) {
        html += data
    })



    res.on('end', function(){
        console.log(spider(html))

        fs.writeFile('./test.json', spider(html), function(err){
            if(err) throw Error(err)
        } )
    })

    res.on('error', function(err) {
        throw Error(err)
    })
})
