
// node --trace_gc -e "var a = [];for (var i = 0; i < 1000000; i++) a.push(new Array(100));" > gc.log

for(var i = 0; i < 1000000; i++) {
    var a = {}
}

var os = require('os')

console.log(os.cpus())

var foo = function () {var local = 'local'; (function(){console.log(local);console.log(this)})()}

foo()

console.log(os.totalmem())