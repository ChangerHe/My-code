/* 
    搭建一个http服务器,用于处理用户发送的http请求

    这里需要使用node的http模块
*/

var http = require('http')

var server = http.createServer()

// 一般情况下端口号是随机分配的,如果没有传值的时候,
// 当我们需要监听固定的端口,那么就更加方便的通过浏览器访问了
// 我们可以将端口号绑定到固定的端口
server.on('error', function(err){
    console.log(err)
})

server.on('listening', function(err){
    console.log('listening...')
})

// 其回调接受两个参数,req表示
server.on('request', function(req, res){
    console.log('有客户端请求了....')
})

server.listen(8080, 'localhost')

console.log(server.address())




