'use strict'
const bluebird = require('bluebird')

var ball1 = document.querySelector(('.ball1'))
var ball2 = document.querySelector(('.ball2'))
var ball3 = document.querySelector(('.ball3'))

function animate(ball, distance, cb) {
    setTimeout(function() {
        var marginLeft = parseInt(ball.style.marginLeft)
        if(marginLeft === distance) {
            cb && cb()
        } else {
            if(marginLeft < distance) {
                marginLeft++
            } else {
                marginLeft--
            }

            ball.style.marginLeft = marginLeft + 'px'
            animate(ball, distance, cb)
        }
    }, 13)
}

// 使用promise改装
       var promise = new Promise()
       console.log(promise)


       // animate(ball1, 100, function(){
       //     animate(ball2, 200, function() {
       //         animate(ball3, 300, function() {
       //             animate(ball3, 150, function() {
       //                 animate(ball2, 150, function() {
       //                     animate(ball1, 150, function() {
       //
       //                     })
       //                 })
       //             })
       //         })
       //     })
       // })
