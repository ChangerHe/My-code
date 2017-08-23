var http = require('http');
var fs = require('fs');

var server = new http.Server();
server.listen(8000);

server.on('request', function(request, response) {
        // 解析请求的url
        var url = require('url').parse(request.url);
        // 特殊url会让服务器在发送相应前先等待
        // 此处用于模拟缓慢的网络连接
        if (url.pathname === '/test/delay') {
            // 使用查询字符串来获取延迟时长，或者2000毫秒
            var delay = parseInt(url.query) || 2000;
            // 设置响应状态码和请求报文
            response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
                // 立即开始编写响应主体
            response.write('sleeping for ' + delay + " milliseconds...")
                // 在之后调用的另一个函数中完成相应
            setTimeout(function() {
                response.write('done')
                response.end();
            }, delay)
        } else if (url.pathname === '/test/mirror') {
            // 响应状态和头
            response.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' })
                // 用请求的内容开始编写响应主体
            response.write(request.method + " " + request.url + " HTTP/" + request.httpVersion + '\r\n')
                // 所有的请求头
            for (var h in request.headers) {
                response.write(h + ": " + request.headers[h] + '\r\n')

            }
            response.write('\r\n')
            request.on('data', function(chunk) {
                response.write(chunk)
            })
            request.on('end', function(chunk) {
                response.end()
            })
        } else {

        }
    }


)