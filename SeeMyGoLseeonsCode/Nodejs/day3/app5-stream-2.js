/*
* 写入流
*   var stream = fs.createWriteStream('文件名')
*
*   stream.write('要写入的内容,可以多次写入')
*   stream.end() // 结束标记
*
* 事件:
*   finish  完成事件
*   error   错误事件
*
* */
var fs = require('fs')

// 创建一个可以写入的流
var stream = fs.createWriteStream('./data3.txt')
stream.write('3333333333333333333333\n')
stream.write('3333333333333333333333\n')
stream.write('3333333333333333333333\n')
stream.write('3333333333333333333333\n')

stream.end()

// 绑定finish事件,在写入完成时触发,告诉用户写入成功了
stream.on('finish', function(){
    console.log('写入成功!')
})

// 绑定错误事件,当写入错误时触发
stream.on('error', function(err){
    throw Error(err)
})

