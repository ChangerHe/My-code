// 使用同步的方法

var fs = require('fs')
var str = '事件内容是: '

console.log(111)

// fs.readFile('./file1.txt', function(err, data){
//     str += data
// })

str += fs.readFileSync('./file1.txt')

console.log(str)











