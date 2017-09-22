/*
* 读取目录中的文件和文件夹列表
*   fs.readdir('目录路径', (err, arr) =>{
*       // 可以输出错误和输出目录数组
*   })
*
* */
var fs = require('fs')

function rmFile(file) {
    var fileArr = fs.readdirSync(file)
    console.log(fileArr)

    for(var i in fileArr) {
        var name = file + '/' +fileArr[i]
        console.log(name)
        var stat = fs.statSync(name)

        // if(stat.isFile()){
        //     fs.unlinkSync(name)
        // } else {
        //     rmFile(name)
        // }
    }

}

rmFile('./test')














