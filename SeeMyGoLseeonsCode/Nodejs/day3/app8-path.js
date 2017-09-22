/*
* path模块
*   提供了一些工具函数,用于处理文件的路径问题
*   对象内容:(parse之后有下面的方法)
 *          .root:    根目录
*           .dir:     目录路径
*           .ext:     返回扩展名
*           .name     返回文件名
*   模块方法:
*       .join   拼接成一个完整的路径
*       .parse  区分开路径中的各个部分
*       .isAbsolute() 判断是否为绝对路径
        .dirname 返回路径文件夹部分,和.dir一样
*       .basename
* url模块
*   提供了一些url的解析等的API
*
*
* */

const path = require('path')
const url = require('url')

var p1 = './iamges/log.jpg'
var p2 = 'http://www.baidu.com'
var p3 = 'E:/images/log.png'

console.log(path.parse(p1))
console.log(path.parse(p2))
console.log(path.parse(p3))
//
// console.log(url.parse(p1))
// console.log(url.parse(p2))
// console.log(url.parse(p3))

console.log(path.join('admin', p1))



















