/**
 * Created by Administrator on 2017/9/19.
 */

/*
* 读取文件的信息
*   fs.stat('文件名', function(err, stat){
*       console.log(stat)
*   })
* stat是一个包含了文件信息的对象
*   参数: size 文件大小
*
*
* 删除文件:也就是取消与之前文件地址之间的链接(哈希地址)
*   fs.unlink('文件名', function(err){
*       // 输出删除成功或失败信息
*   })
*
* 删除空文件夹: 注意只能删除空文件夹
*   fs.rmdir('文件名', function(err){
*       // 输出删除成功或失败信息
*   })
*
* 创建文件夹
*   fs.mkdir('文件名', function(err){
*       // 输出创建成功或失败信息
*   })
*
* 判定是否为文件: .isFile()
* 判定是否为文件夹: .isDirectory()
*
* */

var fs = require('fs')

// fs.rmdir('./test', function(err){
//     if(err){
//         throw Error('删除失败' + err)
//     } else {
//         console.log('删除成功')
//     }
// })


fs.mkdir('./test1', function(err){
    if(err) {
        throw Error('创建失败' + err)
    } else {
        console.log('创建成功')
    }
})