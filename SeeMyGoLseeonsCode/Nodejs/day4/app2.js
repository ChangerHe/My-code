'use strict'
const http = require('http')

http.createServer(function(req, res) {
    var urlPath = req.url

    res.writeHead(200, {
        'Content-Type': "text/html;charset=utf-8"
    })
    res.write(req.url)
    res.end()

    switch (urlPath) {
        case '/':
        case "/index.html":

    }
}).listen(8090)

















