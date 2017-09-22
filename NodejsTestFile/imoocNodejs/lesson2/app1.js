/**
 * Created by Administrator on 2017/9/19.
 */
var url = require('url')

var a = 'http://imooc.com:8080/course/list?from=scott&coutse=node#floor1'

var b = url.parse(a)
// console.log(b)

console.log(url.resolve(a, '/111'))