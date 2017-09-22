var fs = require('fs')

var readStream = fs.createReadStream('./app3.js')
var n = 0

readStream.on('data'. function(chunk) {
    console.log('data emits')
    console.log(Buffer.isBuffer(chunk))
    n++



})

