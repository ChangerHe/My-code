// fs 模块

var fs = require('fs')

var filename = '3.txt'

// 使用同步模式完成文档中没哟改文件时创建,有改文件时增加内容的功能
if(!fs.existsSync(filename)) {
    fs.writeFileSync(filename, 'changer')
    console.log('新文件创建成功')
} else {
    fs.appendFileSync(filename, 'he')
    console.log('新内容增加成功')
}



// fs.exists(filename, function(err1){
//     // console.log(arguments)
//     if(!err1) {
//         fs.writeFile(filename, 'hello', function(err2){
//             if(err2) {
//                 console.log('出错了')
//             } else {
//                 console.log('创建新文件成功')
//             }
//         })
//     } else {
//         fs.appendFile(filename, ' world', function(err3){
//             if(err3) {
//                 console.log('出错了')
//             } else {
//                 console.log('内容追加成功')
//             }
//         })
//     }
// })