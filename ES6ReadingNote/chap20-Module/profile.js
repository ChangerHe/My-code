// profile.js

// export var firstName = 'Michael'
// export var lastName = 'Jackson'
// export var year = 1958

// 或者采用以下的写法

var firstName = 'Michael'
var lastName = 'Jackson'
var year = 1958

export { firstName, lastName, year }

// 除了输出变量以外,还可以输出函数

/* 
    export function multiply(x, y) {
        return x * y
    }

    // 通常情况下,export输出的变量就是本来的名字,但是可以用as关键字进行重命名

    function v1() {}
    function v2() {}

    export{
        v1 as streamv1
        v2 as streamv2
        v2 as streamLatestVersion
    }

    
*/

// export命令可以出现在模块的任何位置,只要初一模块顶层即可. 如果处于块级作用域内,会报错