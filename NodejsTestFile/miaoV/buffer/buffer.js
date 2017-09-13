/**
 * Created by Administrator on 2017/9/13.
 */

var a = new Buffer(5)

console.log(a)

a[1] = 1

console.log(a)

a[4] = 255

console.log(a)

var b = new Buffer('miaov', 'utf-8')

console.log(b)  // <Buffer 6d 69 61 6f 76>  其实输出的就是其对应的ascii码

console.log('m'.charCodeAt().toString(16)) // 6d

var c = '畅哥'

var d = new Buffer(c);

console.log(c.length)   // 2
console.log(d.length)   // 6

var e = new Buffer('changerhe')

console.log(e.toString())

var f = e.toString('utf-8', 1, 3)
console.log(f)
f[0] = 'b'
console.log(f)
console.log(e)


var g = new Buffer(10)

e.copy(g, 1)
console.log(g)

g[2] = 12
console.log(g)
console.log(e)

console.log(Buffer.isBuffer(g))

var h = new Buffer([1,2,3])

var i = [h, g]

console.log(Buffer.concat(i))

