/*
* 读取目录中的文件和文件夹列表
*   fs.readdir('目录路径', (err, arr) =>{
*       // 可以输出错误和输出目录数组
*   })
*
* */
var fs = require('fs')

// fs.readdir('./', (err, arr) => {
//     if(err) {
//         throw Error('读取错误' + err)
//     } else {
//         console.log('读取成功')
//     }
// })

fs.readdir('./test', (err, arr) => {
    if(err) {
        throw Error('读取错误' + err)
    } else {
        remove(arr)
    }
})

// remove()

function remove(fileArr) {
    for(var i = 0; i < fileArr.length; i++) {
        if(fileArr[0] == null) {
            console.log('删除成功')
        } else {
            if(fs.stat(fileArr[i]).isFile()){
                fs.unlink(fileArr[i], function(err){
                    if(err) {
                        throw Error('文件夹删除错误')
                    }
                })
            } else {
                remove(fileArr[i])
            }
        }
    }
}
















