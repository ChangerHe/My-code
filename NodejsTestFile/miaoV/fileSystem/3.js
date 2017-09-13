// fs 模块

var fs = require('fs')

// 本js文件模拟文件的写入过程
// 因为文档需要同时写入,所以文档的读取模式应该是读写模式
// 也就是对应的读 'r' 应为 'r+'
fs.open('1.txt', 'r+', function(err, fd) {
    if(err) {
        console.log('File is not found')
    } else {
        var buffer = new Buffer('123456')
        // fs.write(fd, buffer, 0, 3, 3, function(){
        //     console.log(arguments)
        //     // 因为该回调有三个参数,第一个参数是错误信息,第二个参数是写入的数据的长度,第三个参数是写入的buffer对象
        //     // 所以在这里得到的arguments的值是
        //     // { '0': null, '1': 3, '2': <Buffer 31 32 33 34 35 36> }
        // });

        // 另一个方式
        fs.write(fd, '789', 5, 'utf-8')

        // 我们使用write的时候,记得在不使用之后将其关闭掉
        fs.close(fd, function() {
            console.log(arguments)
            // 这里的返回值为错误信息,仅一个返回值
        })

    }


})