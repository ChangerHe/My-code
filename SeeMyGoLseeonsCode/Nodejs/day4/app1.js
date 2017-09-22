'use strict'
const http = require('http')
const fs = require('fs')
const path = require('path')

// 生成需要的文件路径
var dir = path.join(__dirname,'OnlineStoreProject')

console.log(path.join(dir, 'index.html'))

var server = http.createServer()

server.on('request', function(req, res) {
    // req 请求对象: 封装了所有客户端请求的内容(请求头, 请求体)
    // res 响应对象,封装了所有服务器端响应的内容(响应头, 响应体)

    switch (req.url) {
        case '/':;
        case '/favicon.ico':;
        case '/index.html':
            res.writeHead(200, {'Content-Type':'text/plain;charset=utf-8'})
            sendData('/OnloneStoreProject/index.html', req, res)
            break;
        case '/news.html':
            res.writeHead(200, {'Content-Type':'text/plain;charset=utf-8'})
            res.write('我是新闻页');
            break;
        default:
            res.writeHead(404, {'Content-Type':'text/plain;charset=utf-8'})
            res.write('输入错误')
            break;
    }
    res.end()
})

server.listen(8080)





















