var ws = require("nodejs-websocket")

var port = 3000;
// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
	console.log("New connection")
	conn.on("text", function (str) {
		console.log("Received "+str)
		conn.sendText(str);
	});
	conn.on("close", function (code, reason) {
		console.log("Connection closed")
	});
	conn.on("error", function (err) {
		console.log("handled error");
		console.log(err);
	});
}).listen(port);

console.log("websocket sercer listening on port: "+port);