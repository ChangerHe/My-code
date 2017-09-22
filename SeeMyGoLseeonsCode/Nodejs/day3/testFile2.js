const fs = require('fs')

// 创建可读流
var stream = fs.createReadStream('./testFile2.txt')

// 绑定data事件,读取可读流的data
stream.on('data', (data)=>{
    console.log(data.toString())
})

