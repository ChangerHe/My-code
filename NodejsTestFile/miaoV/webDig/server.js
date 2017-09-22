/* 
    搭建一个http服务器,用于处理用户发送的http请求

    这里需要使用node的http模块

    此模块并不是nodejs的核心模块,所以需要在使用的时候进行引入
*/

// 加载node的http模块
var http = require('http')

// 通过http模块下的createServer创建并返回一个web服务器对象
var server = http.createServer()

// 监听8080端口的信息
/*
* server.listen() 方法传递四个参数
*   port 其实我们使用最多的还是第一个参数,也就是服务器监听的端口号
*   hostname 表主机名, 主机名可以为ip或者域名
*   backlog 表示链接等待队列的最大长度
*   callback 表示事件处理成功之后的回调函数,那么在成功开启监听之后,会触发一个listening事件,callback将作为该事件的执行函数
*
* */
server.listen(8080,function(){
    console.log('listing ...')
})

// 我们可以使用server.address查找到开启的端口号信息
console.log(server.address())

server.on('request', function(req, res){
    // console.log(req,res)

    console.log('有请求了')
    /*
    * request: 主要包含的是服务器的请求头信息,等
    * */

    // 写上服务器的头信息, 第一个参数是服务器的状态码,第二个是服务器状态码的描述,如果不写的话就是默认的, 第三个参数是一个对象,返回头信息的各项内容
    // 头信息的内容是可以自己自由编写的
    res.writeHead(999 , "miaov", {
        "content-type": "text/html"
    })

    // 当我们需要返回数据给客户端的时候,就需要使用res参数了
    // 可以直接在服务端写内容到客户端
    res.write("<h1>hello</h1>")

    // h当我们写了请求的时候,需要将请求结束掉,页面才能正常显示
    // 因此,我们使用res.end()来结束掉这个请求挂起的状态
    // 这个方法必须在所有的东西执行之后调用
    res.end()

})


















































//
// var http = require('http')
//
// var server = http.createServer()
//
// // 一般情况下端口号是随机分配的,如果没有传值的时候,
// // 当我们需要监听固定的端口,那么就更加方便的通过浏览器访问了
// // 我们可以将端口号绑定到固定的端口
// server.on('error', function(err){
//     console.log(err)
// })
//
// server.on('listening', function(err){
//     console.log('listening...')
// })
//
// // 其回调接受两个参数,req表示
// server.on('request', function(req, res){
//     console.log('有客户端请求了....')
// })
//
// server.listen(8080, 'localhost')
//
// console.log(server.address())




