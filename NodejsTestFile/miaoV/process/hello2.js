console.log('This is hello2')

var b = 1

module.exports.a = b

console.log(module.exports === exports);

// 创建一个定时器,并暴露出来给hello使用
// var timer = setInterval(function () {
//     let a = new Date();
//
//     console.log('现在是: ' + a.getFullYear() + '年' + a.getMonth() + '月' + a.getDate() + '日')
// }, 1000);

// module.exports.timer = timer

// argv
console.log(process.argv)

console.log(process.platform);

function log(msg) {
    process.stdout.write(msg)
}

// log('你好')

// 使用resume来开启用户的输入事件
process.stdin.resume()

var a;
var b = 0;

process.stdout.write('Please input a : ')


process.stdin.on('data',function(data) {

    if(!a) {
        process.stdout.write('You\'d input a = ' + data)
        a = parseFloat(data);

        process.stdout.write('Please input b : ')
    } else {
        b = parseFloat(data);
        process.stdout.write('You\'d input b = ' + data)
    }
    if(!!b) {

        process.stdout.write('All input summery is :' + (a + b))
    }

})
