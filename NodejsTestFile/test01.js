var http = require("http");
var server = http.createServer();
server.on("request", function(req, res) {
	console.log('Server is visiting');
	res.end('<h1>hello Node.js</h1>')
})
server.listen(80)