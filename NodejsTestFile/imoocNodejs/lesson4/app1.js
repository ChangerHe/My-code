'use strict'
var a = new Buffer('hello 慕课网', 'base64')
var b = new Buffer('hello 慕课网', 'utf-8')
var c = new Buffer(6)

console.log(a.length)
console.log(b.length)
c.write('12345678')

console.log(c.toString())