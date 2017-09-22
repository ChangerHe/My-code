'use strict'

var a = new Buffer('hello 慕课网')
a.write('hi 慕课网')

var b = Buffer.from('hello Mukewang')

console.log(b.toString())
console.log(a.toString())

var c = b.copy(a, 2, 5)
console.log(a.toString())

console.log(b.toString())
console.log(c.toString())

