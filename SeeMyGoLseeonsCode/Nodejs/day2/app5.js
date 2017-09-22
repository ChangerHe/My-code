/*
* Promise是一个对象, 用来传入异步操作的消息. 代表了某个未来才会知道结果的事件
* Promise存在三个状态
*   Pending 进行中
*   Resolved 完成
*   Rejected 失败
* 以上的三个状态只能从进行中转为完成或进行中转为失败,
* Promise主要是对
* */

/*
* 由于事件轮询机制,所以任务可能并不会在按照顺序执行,下面的代码可能会出现下面这个情况
*   我是事件222222222
*   我是事件111111111
*
 * */
var fs = require('fs')

// fs.readFile('./file1.txt', function(err, data) {
//     console.log(data.toString())
// })
//
// fs.readFile('./file2.txt', function(err, data) {
//     console.log(data.toString())
// })

var p1 = new Promise(function(resolve, reject){
    fs.readFile('./file11.txt', function(err, data) {
        if(err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

p1.then(function(data){
    console.log(data.toString())
},function(err) {
    console.log('访问失败')
})
