/*
* 基于回调的事件编程也可以实现异步
*   fs.createReadStream()
* */

var fs = require('fs')

var stream = fs.createReadStream('./data.txt')

stream.on('data', function(a) {
    console.log(a)
})








