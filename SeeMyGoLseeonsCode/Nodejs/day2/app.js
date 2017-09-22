/**
 * Created by Administrator on 2017/9/18.
 */

// 注意,此处模块名需要加上s
var events = require('events')
var em = events.EventEmitter
var event = new em()

// 我们绑定一个名字叫做zhangsan的事件
// 后面可以使用event.emit()的方式,调用这个事件
event.on('zhangsan', function() {
    console.log('111')
})

// 这样做的目的在于,可以按条件来触发事件

event.emit('zhangsan')

// console.log(event)

setTimeout(function(){
    event.emit('zhangsan')
}, 2000)