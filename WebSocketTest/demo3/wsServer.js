var ws = require("nodejs-websocket")

var port = 3000;

var clientCount = 0;
// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
	console.log("New connection");
	clientCount++;
	conn.nickname = 'user'+clientCount;
	broadcast(conn.nickname+ " comes in");
	conn.on("text", function (str) {
		console.log("Received "+str);
		broadcast(str);
	});
	conn.on("close", function (code, reason) {
		console.log("Connection closed");
		broadcast(conn.nickname+" left");
	});
	conn.on("error", function (err) {
		console.log("handled error");
		console.log(err);
	});
}).listen(port);

console.log("websocket sercer listening on port: "+port);

function broadcast(str)　{
	server.connections.forEach(function(connection){
		connection.sendText(str);
	});
}