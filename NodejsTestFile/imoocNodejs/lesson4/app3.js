var fs = require('fs')

var source = fs.readFileSync('logo.png')

fs.writeFileSync('logo_copy.png', source)