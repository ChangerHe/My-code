/**
 * Created by Administrator on 2017/9/19.
 */

var http = require('http')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('hello Nodejs')
}).listen(1337, '127.0.0.1')

console.log('Server is http://127.0.0.1:1337/')

