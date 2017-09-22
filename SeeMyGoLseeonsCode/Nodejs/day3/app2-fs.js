// 引入文件系统模块
var fs = require('fs')

/*
 * 读取文件
 *      1.直接读取
 *          将文件从硬盘全部读取内容以后再执行后面的代码
 *          a.异步方式 :  readFile('./data.txt', callBack)
 *          读取文件,并将文件的内容放到回调函数的第二个参数中
 *          b.同步方式
 *          将读取到的内容作为函数的返回值
 *
 *      2.流式读取
 *          读一节,拿一节
 *
 *
 *      【特别注意】: 几乎所有的文件操作都是在异步的操作API后面加上Sync来转为同步
*/

fs.readFile('./data.txt', function(err, data){
    if(err) console.error('出错了')
    console.log('异步: ',data.toString())
})

var fsResult = fs.readFileSync('./data.txt')
console.log('同步: ',fsResult.toString())











