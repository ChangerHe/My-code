const fs = require('fs')

const buf = new Buffer(10)

var buf1 = new Buffer([97, 98, 99])

var buf2 = new Buffer('ABC')

buf1.copy(buf2)

console.log(buf1.toString())
console.log(buf2.toString())

//  使用promise在函数中返回一个promise对象
// 当调用成功时,返回resolve,将data值传出
// 调用.then方法,保证是在之前的promise的之后执行
// 调用resolve中的data,并将其写入testFile1中
var promiseTest = () => {
    return new Promise((resolve, reject)=>{
            fs.readFile('./data3.txt', function(err, data){
            if(err){
                reject(data)
            } else {
                resolve(data)
            }
        })
    })
}

promiseTest().then((value)=>{
    fs.writeFile('testFile1.txt', value, function(err){
        if(err) {
            console.error('写入错误')
        }
    })
},(err)=>{
    console.error(err)
})

