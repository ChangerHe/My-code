/*
* 链式流
    从输出流到输入流,中间可以由多个中转流组成
*   输出流.pipe(中转流).pipe(写入流)
*
* */
var fs = require('fs')
// 引入压缩模块
var zlib = require('zlib')


// 使用链式流实现文件压缩
var stream1 = fs.createReadStream('./data.txt')
var stream2 = fs.createWriteStream('./data.txt.zip')

stream1.pipe(zlib.createGzip()).pipe(stream2)











