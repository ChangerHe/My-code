// fs 模块

var fs = require('fs')

/*
 *  fs.open(path, flags, [mode], callBack
 *       path: 文件的路径
 *       glags: 打开文件的方式 读/写
 *       [mode]: 设置文件的模式 读/写/执行 4/2/1
 *       callback: 回调
 *           err: 文件打开失败的错误会保存在err里面
 *           fd:  文件打开的标识
 * */


/*
 *  文件的读取:
 *       fs.read(fd, buffer, offset, length, position, callback)
 *         fd: 通过open方法成功打开一个文件返回的编号
 *         buffer: buffer对象
 *         offset:
 *         length:
 *         position:
 *         callback
 * */




fs.open('1.txt', 'r', function (err, fd) {
    if (err) {
        console.log('文件打开失败')
    } else {
        console.log('文件打开成功')
    }

    var bf1 = new Buffer(10)
    console.log(bf1)
    fs.read(fd, bf1, 2, 4, 0, function (err, length, newBf) {
        console.log(bf1.toString())
        console.log(length)
        console.log(newBf)
    })

})

var fd1 = fs.openSync('1.txt', 'r')
console.log(fd1)