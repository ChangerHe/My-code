// 引入express
var express = require('express')
var utility = require('utility')

// 调用express实例, 不带参数调用时,返回的是一个express的实例
var app = express()

// app本身具有很多方法,包括最常用的get/ post/ put/patch/ delete等等
// 在这里我们调用它的get方法,为我们的'/'路径指定一个handler函数
// 那么handler会接收req和res两个对象,分别是请求的request和response
// request 中包含了浏览器传来的各种信息
// response 我们一般不从里面取信息, 而是通过它来定制我们向浏览器输出的信息


app.get('/', function(req, res) {

    var q = req.query.q

    //md5是一个加密的工具
    var md5Value = utility.md5(q)

    res.send(md5Value)
})

// 定义好app的行为之后,让它监听本地的3000端口, 这里的第二个函数是个回调函数,会在listen动作成功之后执行
app.listen(3000, function(){
    console.log('app is listening at port 3000')
})