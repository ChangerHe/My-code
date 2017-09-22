const fs = require('fs')
const path = require('path')

// 定义一个函数,用于解决原生nodejs只能删除空文件夹的问题

function deleteFile(fileName) {
    var fileCon = fs.readdir(fileName, function(err,data){
        for(var i in data) {
            // var pathName = fileName.join(data[i])
            var pathName = path.join(fileName, data[i])
            fs.stat(pathName, function(err, stats){
                if(!stats.isFile()) {
                    deleteFile(pathName)
                } else {
                    fs.unlink(pathName, function(){
                        if(err){
                            throw Error(err)
                        } else {
                            console.log('删除文件成功')
                        }
                    })
                }
            })
        }
        fs.rmdir(fileName, function(){
            if(err){
                throw Error(err)
            } else {
                console.log('删除文件夹成功')
            }
        })
    })
    console.log(fileCon)
}

deleteFile('./test')



// 使用同步方法,OK
/*
function deleteFileSync(fileName) {
    // 同步读取文件名
    var fileCon = fs.readdirSync(fileName)
    // 定义回调函数,对文件名内的内容进行循环
    for(var i in fileCon) {
        // 因为进入了文件内部,所以需要加上路径的前缀
        var pathName = path.join(fileName, fileCon[i])
        //
        var stats = fs.statSync(pathName)
        if(stats.isFile()){
            fs.unlinkSync(pathName)
        } else {
            deleteFileSync(pathName)
        }
    }
    fs.rmdirSync(fileName)
}

deleteFileSync('../day')
*/