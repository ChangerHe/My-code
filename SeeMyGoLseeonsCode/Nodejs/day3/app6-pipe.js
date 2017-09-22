/*
* 管道pipe
*   管道提供了一个输出流到输入流的机制,通常我们用于从一个流中获取数据并将数据传递到另外一个流中
* */

// 使用流实现大文件的复制
var fs = require('fs')
var s1 = fs.createReadStream('./data3.txt')
var s2 = fs.createWriteStream('./data4.txt')

s1.on('data', function(err, data){
    if(err) throw Error('出现错误: ' + err)
    s2.write(data)
})

// 当s1读取流结束之后, 将s2结束掉
s1.on('end', function(){
    s2.on('end', function(){
        console.log('结束')
    })
})

// s1.pipe(s2)

















