/*
* 异步编程的实现
*   不同于客户端的编程方法,我们添加事件,当执行时其不一定是异步的
*   回调函数不一定是异步,但是异步一定是有回调函数的
*   我们绑定事件时,事件在什么时候执行要视我们在什么时候调用emit来决定, 而却使用on绑定的事件不是异步的.
*
* 基于
* */

var events = require('events')
var e = new events.EventEmitter()

console.log(111)

e.on('shadiao', function() {
    console.log(`shadiao事件触发了`)
})

console.log(222)

e.emit('shadiao')

console.log(333)









