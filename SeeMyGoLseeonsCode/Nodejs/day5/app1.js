'use strict'

const http = require('http')
const ejs = require('ejs')

var server = http.createServer()

server.on('request', function(req, res) {
    res.write('<html>')
    res.write('<head>')
    res.write('<meta charset="utf-8">')
    res.write('<title>我的网站</title>')
    res.write('</head>')
    res.write('<body>')
    res.write('<h1>hello nodejs</h1>')
    res.write('</body>')
    res.write('</html>')

    res.end()
}).listen(80)