'use strict'

const http = require('http')
const ejs = require('ejs')

var server = http.createServer()

server.on('request', function(req, res) {
    ejs.renderFile('./app2-temp.html', {"ip": "127.0.0.1"},function(err, data) {
        res.write(data)
    })

    res.end()
}).listen(80, function() {
    console.log('server is runing')
})