/*
* 读取流:(创建可以读取的流)
*   fs.createReadStream('文件路径')
*   stream.on() // 绑定事件
*       事件有: data: 读取数据事件,读取到数据对象, 默认每次读取的数据大小是64KB
*              end:  数据读取结束事件
*              error:错误提示事件
*
*
* */
var fs = require('fs')
var stream = fs.createReadStream('./data.txt')

stream.on('data', function(a){
    console.log(a.length)
})

stream.on('end', function(){
    console.log(arguments)
})

stream.on('error', function(err){
    console.error('出错了')
})













