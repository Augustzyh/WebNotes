var http = require("http");

http.createServer(function(req,res){
   res.writeHead(200,{"Content-type":"text/blain"});
   res.write("这里是8888端口哦");
   res.end();
}).listen(8888);