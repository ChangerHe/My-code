var EventEmitter = require('events').EventEmitter
var life = new EventEmitter()

life.setMaxListeners(12)

function ver(who) {
    console.log('给 ' + who + ' 倒水')
}

life.on('求AV', ver)

life.on('求AV', function(who) {
    console.log('给 ' + who + ' 倒水')
})

life.on('求AV', function(who) {
    console.log('给 ' + who + ' 倒水')
})

life.on('求AV', function(who) {
    console.log('给 ' + who + ' 倒水')
})
life.on('求AV', function(who) {
    console.log('给 ' + who + ' 倒水')
})
life.on('求AV', function(who) {
    console.log('给 ' + who + ' 倒水')
})
life.on('求AV', function(who) {
    console.log('给 ' + who + ' 倒水')
})
life.on('求AV', function(who) {
    console.log('给 ' + who + ' 倒水')
})
life.on('求AV', function(who) {
    console.log('给 ' + who + ' 倒水')
})
life.on('求AV', function(who) {
    console.log('给 ' + who + ' 倒水')
})
life.on('求AV', function(who) {
    console.log('给 ' + who + ' 倒水')
})
life.on('求AV', function(who) {
    console.log('给 ' + who + ' 倒水')
})
life.on('求VA', function(who) {
    console.log('给 ' + who + ' 倒水')
})

// life.emit('求AV', '汉子')

console.log(life.emit('求AV', '汉子'))
console.log(life.emit('求VA', '汉子'))


console.log(life.listeners('求AV').length)
life.removeListener('求AV', ver)
console.log(life.listeners('求AV').length)
life.removeListener('求AV', function(who) {
    console.log('给 ' + who + ' 倒水')
})

console.log(life.listeners('求AV').length)

