var http = require('http');
var url = require('url');
var qs = require('querystring');

http.createServer(function(req, res){
	// req ==》 请求体
	// res ==》 响应体
	// 允许跨域访问

	res.setHeader('Access-Control-Allow-Origin','*');
	// 设置返回给客户端的响应头信息
	res.writeHead(201, {'Content-Type': 'text/html'});
	if(req.method === "GET"){
		var obj = url.parse(req.url, true);
		// 下面是后台返回的数据
		res.write('[GET方式]你好，您输入的用户名是：' + obj.query.user + '，密码是：' + obj.query.pwd);

		res.end()
	}else if(req.method === "POST"){
		//console.log('客户端已经post访问')
		var str = "",
			obj = {};

		req.on('data', function(data){
			str += data;
		})

		req.on('end',function(){
			obj = qs.parse(str);
			console.log(1)
			res.write('[POST方式]你好，您输入的用户名是：' + obj.user + '，密码是：' + obj.pwd)
			res.end();
		})

	}
}).listen(3000)
console.log('服务器已经启动，正在监听3000端口')