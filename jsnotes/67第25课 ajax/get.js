var http = require('http');
var url = require('url');
var qs = require('querystring');

http.createServer(function (req,res) {    //请求体，响应体:当接收到前端发送的请求要干嘛
    //允许跨域访问
    res.setHeader('Access-Control-Allow-Origin','*');  //*所有的都可以访问
    res.writeHead(201,{'Content-Type':'text/plain'});  //设置返回给客户端的响应头信息，可更改服务器状态
    if(req.method === "GET"){
        var obj = url.parse(req.url,true);
        //下面试后台返回的数据
        res.write("[GET]你的用户名" + obj.query.user + "密码" + obj.query.pwd);
        res.end();
    }else if(req.method === "POST") {
        var str= "",
            obj = {};
        req.on('data',function (data) {
            str +=data ;
        });
        req.on('end',function () {
            obj = qs.parse(str);
            res.write("[POST]你的用户名" + obj.user + "密码" + obj.pwd); //obj没有query
            res.end();
        });
    }
}).listen(3000);   //不能用80 web再用    这就创建了node.js服务器
console.log('服务器已经启动，正在监听3000端口');