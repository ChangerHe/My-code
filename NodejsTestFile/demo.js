window.onload = function(){
	$.$.post('/url', {title: '深入浅出Node.js'}, function(data) {
		console.log('GET Mmessage')
	});
	console.log('发送Ajax请求')
}