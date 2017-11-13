var obj = require('./a.js')
require('../css/test.css')
require('../css/test1.less')
var img1 = require('../images/2.jpg')
var img2 = require('../images/4.jpg')
var img3 = require('../images/5.jpg')
var img4 = require('../images/7.jpg')
console.log(img1)
document.querySelector('#img1').src = img3
document.querySelector('#img2').src = img1
obj.show()