var http = require('http');
var PORT = 8081;

var server = http.createServer(function (request, response) {
	response.end('hello world');
})

server.listen(PORT, function () {
	console.log('服务启动成功，正在监听：', PORT);
})