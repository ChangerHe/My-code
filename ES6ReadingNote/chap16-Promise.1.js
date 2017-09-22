// ES6规定, Promise对象是一个构造函数, 用来生成Promise实例



// var promise = new Promise(function(resolve, reject) {
//     if(/*异步操作成功*/) {
//         resolve(value)
//     } else {
//         reject(error)
//     }
// })

// Promise构造函数接受一个函数作为参数, 该函数的两个参数分别是resolve和reject. 他们是两个函数,由javascript引擎提供,不用自己部署.
/*
* resolve函数的作用是, 将Promise对象的状态从未完成变成成功
* reject函数的作用是,将Promise对象的状态从未完成变为失败
* */


//在promise实例生成之后, 可以用then方法分别指定resolve和reject的回调参数, 其中第二个参数是可选的
// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done')
//     })
// }
//
// timeout(1000).then((value) => {
//     console.log(value)
// })

// var p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error('fali')), 3000)
// })
//
// var p2 = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(p1), 1000)
// })
//
// p2.then(result => console.log(result))
// p2.catch(error => console.log(error))


/*
var getJSON = function(url) {
    var promise = new Promise(function(resolve, reject) {
        var client = new XMLHttpRequest()
        client.open('GET', url)
        client.onreadystatechange = handler
        client.responseType = 'json'
        client.setRequestHeader('Accept', 'application/json')
        client.send()

        function handler() {
            if(this.readyState != 4) {
                return
            }
            if(this.status === 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText))
            }
        }
    })
    return promise
}

getJSON('/posts.json').then(function(json){
    console.log('Contents: ' + json)
}, function(error) {
    console.error('出错了: ', error)
})
*/

// var promise = new Promise(function(resolve, reject) {
//     throw new Error('test')
// })
//
// promise.catch(function(error){
//     console.log(error)
// })

// var promise = new Promise(function(resolve, reject) {
//     // 当我们提前将Promise的状态变为resolve的时候,后面抛出错误就是无效的
//     resolve('ok')
//     throw new Error('test')
// })
//
// promise.catch(function(error){
//     console.log(error)
// }).then(function(value){
//     console.log(value)
// })

// // 跟传统的try-catch方法不同的是,如果没有使用catch方法指定错误处理的回调函数,Promise对象抛出的错误不会传递到外层代码
// var someAsyncThing = function() {
//     return new Promise(function(resolve, reject) {
//         resolve(x + 2)
//     })
// }
//
// someAsyncThing().then(function() {
//     console.log('everything is great')
// })

