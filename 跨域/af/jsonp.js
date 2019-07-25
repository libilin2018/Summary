

var http = require('http');
var url = require('url');
var PORT = 8081;

var server = http.createServer(function (request, response) {
	var queryObj = url.parse(request.url, true).query;
	// 获取回调函数名进行调用
	response.end(`${queryObj.callback}({name: 'billy'})`);
})

server.listen(PORT, function () {
	console.log('服务启动成功，正在监听：', PORT);
})

// var queryObj = url.parse(request.url, true).query;
	// console.log(request);
	// response.end(`${queryObj.callback}({name: 'billy'})`);