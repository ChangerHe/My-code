// fs 模块

var fs = require('fs')

var filename = '3.txt'

fs.readdir('../fileSystem', function() {
    console.log(arguments)
})