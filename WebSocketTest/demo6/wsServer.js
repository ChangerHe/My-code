var app = require('http').createServer();
var io = require('socket.io')(app);

var port = 3000;

var clientCount = 0;

app.listen(port);

io.on('connection', function(socket) {
	clientCount++;
	socket.nickname = 'user'+clientCount;
	io.emit('enter', socket.nickname+" comes in");

	socket.on('message', function(str) {
		io.emit('message', socket.nickname+" says："+str);
	});

	socket.on('disconnect', function() {
		io.emit('leave', socket.nickname+" left");
	});
});

console.log("websocket sercer listening on port: "+port);
