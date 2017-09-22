/**
 * Created by Administrator on 2017/9/19.
 */

var fs = require('fs')

var a = new Buffer(5)

a.write('张三')

console.log(a.toString())

// 复制到目标缓存区
var b = new Buffer('hello')
var c = new Buffer(4)

b.copy(c)
console.log(b.toString())
console.log(c.toString())