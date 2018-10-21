const http = require('http'),
	url = require('url'),
	fs = require('fs'),
	qs = require('querystring');


http.createServer(function(req, res){
	// 设置允许被跨域访问
	res.setHeader('Access-Control-Allow-Origin', '*')
	if(req.method === "GET"){

		console.log('已接受到请求')

		let obj = url.parse(req.url, true);

		let myReadStream = fs.createReadStream(__dirname + '/userinfo.txt', 'utf8');

		let data = "";
		myReadStream.on('data', function(chunk){
			data += chunk;
		})
		let arr;
		myReadStream.on('end', function(){
			data = data || '[]';
			arr = JSON.parse(data);


			var flag = false; // true就是用户名已经存在

			delete obj.query.t_;

			for (var i = 0, item; item = arr[i]; i++) {
				if(item.id === obj.query.id){ // 客户端提交的数据是否已经存在数据库
					flag = true;
				}
			}

			if(flag){
				res.write('{"type": 0, "msg": "用户名已经注册"}')
				res.end()
			}else{
				res.write('{"type": 1, "msg": "恭喜！用户名可以使用"}')
				res.end()
			}
		})

	}else if(req.method === "POST"){ // post方式
		
		let str = "",
			obj = {};
			// str 是前端发过来的数据
		req.on('data', function(data){
			
			str += data;
		});
		
		var a = false;

		req.on('end', function(){
			obj = qs.parse(str)

			let myReadStream = fs.createReadStream(__dirname + '/userinfo.txt', 'utf8');
			// 是数据库的数据
			let data = "";
			myReadStream.on('data', function(chunk){
				data += chunk;
			})
			
			let arr;
			myReadStream.on('end', function(){
				data = data || "[]";
				arr = JSON.parse(data);
				
				for (var i = 0, item; item = arr[i]; i++) {
				    if (item.id === obj.id) {
				        a = true;
				    }
				}
				if (a) {
				    res.write('{"type": 0,"msg":"账号已存在"}')
				    res.end();
				} else {
				    
				    arr.push(obj);
				    let str = JSON.stringify(arr);

				    fs.writeFile('userinfo.txt', str, function(err){
				    	if(err)throw err;
				    	console.log('文件保存成功')
				    	res.write('{"type": 1, "msg": "注册成功"}')
				    	res.end()
				    })
				}
			})
			
		})
		
	}

}).listen(3000, function(){
	console.log('服务器启动成功，正在监听3000端口')
})