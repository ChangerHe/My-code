/*
* 流:
*   流是一组有序的,有起点和终点的字节数据的传输方式. 所有的网络通信都是以流的方式进行
*
*
*
* */

var http = require('http')
var fs = require('fs')

// 使用异步的方式直接读取大文件
// for(var i = 0; i < 10; i++){
//     fs.readFile('./0211.avi', function(err){
//         console.log('读取成功')
//     })
//
// }

http.get('http://www.itsource.cn/', function(res){
    res.on('data', function(data){
        console.log(data)
    })

    res.on('end', function(err) {
        if(err) {
            throw Error('错误' + err)
        } else {
            console.log('成功')
        }
    })
})






















