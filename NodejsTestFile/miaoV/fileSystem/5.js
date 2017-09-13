// fs 模块

var fs = require('fs')

var filename = '3.txt'

fs.readFile(filename, function(err, data) {
    if( !err) {
        console.log(data.toString())
    } else {
        console.log('读取失败')
    }
})

fs.unlink('2.txt',function(err){
    if(!err) {
        console.log('文件删除成功')
    } else {
        console.log('文件删除失败')
    }
})

fs.rename('3.txt', '3.new.txt',function(err) {
    if(!err) {
        console.log('文件重命名成功')
    }
})

fs.stat('3.new.txt',function() {
    console.log(arguments)
})
fs.watch('3.new.txt',function() {
    console.log(arguments)
})