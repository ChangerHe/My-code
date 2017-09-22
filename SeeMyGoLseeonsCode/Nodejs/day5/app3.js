'use strict'

const http = require('http')
const ejs = require('ejs')
const mime = require('mime')
const fs = require('fs')
const url = require('url')

var server = http.createServer()

// 理论上应该是异步的问题

server.on('request', function(req, res) {
    var urlPath
    if(req.url === '/') {
        urlPath = './www/index.html'
    } else {
        urlPath = './www' + req.url
    }
    console.log(urlPath)
    fs.readFile(urlPath, function(err, data) {
        console.log(data)
        if(data) {
            res.writeHead(404, {
                'Content-Type': 'text/plain;charset=utf-8'
            })
            res.write('404 您访问的页面出错')
        } else {
            var mimeType = mime.getType(urlPath)
            res.writeHead(200, {
                'Content-Type': mimeType +';charset=utf-8'
            })
            res.write(data)
        }
    })


    // var mimeType = mime.getType(urlPath)
    // res.writeHead(200, {
    //     'Content-type': ''+ mimeType +';charset=utf-8'
    // })
    // if(data) {
    //     res.write(data)
    // } else {
    //     res.write('404 您访问的页面出错')
    // }

    // switch (req.url) {
    //     case "/":
    //     case "/index.html":
    //         res.writeHead(200, {
    //             'Content-type': ''+ mimeType +';charset=utf-8'
    //         })
    //         var data = fs.readFileSync('./www'+req.url)
    //         res.write(data)
    //         break
    //     case '/bolg.html':
    //         res.writeHead(200, {
    //             'Content-type': ''+ mimeType +';charset=utf-8'
    //         })
    //         var data = fs.readFileSync('./www'+req.url)
    //         res.write(data)
    //         break

    // }

    res.end()
}).listen(80, function() {
    console.log('server is runing')
})