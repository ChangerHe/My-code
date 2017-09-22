/**
 * Created by Administrator on 2017/9/19.
 */

var qs = require('querystring')

var a = qs.stringify({name:'scott',course:['jace','node']})

console.log(a)

var b = qs.parse(a)

console.log(b)

var c =qs.escape('<哈哈>')

console.log(c)

console.log(qs.unescape(c))

function a() {
    return 11
}
[1,2,3].forEach(function(){
    return 1
})