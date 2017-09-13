console.log('hello nodejs')

var a = 100

global.a = 200

console.log(a)

console.log(global.a)

console.log(__filename)  // 在此情况下,输出的是当前系统下的文件的路径

var b = require('./hello2')  // 我们使用require方法加载在本地的同名文件夹下的hello2文件,并执行它

// require('./hello3')

console.log(b);  // 当我们将hello2的变量b使用module.exports暴露出来之后,就可以在另一个js文件中使用require来调用它了




