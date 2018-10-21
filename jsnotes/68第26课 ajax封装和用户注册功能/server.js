const http = require('http'),
    url = require('url'),
    qs = require('querystring'),
    fs = require('fs');
//创建服务器
http.createServer(function (req,res) {
    res.setHeader('Access-Control-Allow-Origin','*');//设置是否允许呗跨域访问 *都可以
    if(req.method === "GET"){
        let obj = url.parse(req.url,true);//parse格式化
        let myReadStream = fs.createReadStream(__dirname + '/userinfo.txt' , 'utf8');
                                            //流方式读文件    __dirname当前路径
        let data = "";
        myReadStream.on('data',function (chunk) {
            data += chunk;
        });
        let arr;
        myReadStream.on('end',function () {
            data = data || '[]';
            arr = JSON.parse(data);

            var flag = false;
            delete obj.query.t_;
            for(var i = 0,item;item = arr[i];i++){
                if(item.id === obj.query.id){    //客户端提交的数据是否已经存在
                    flag = true;                   //true就是用户名已经存在
                }
            }
            if(flag) {
                res.write('{"type":0,"msg":"用户名已经注册"}');  //要将对象变为字符串传输
                res.end();
            }else {
                //else 代表用户名可以注册
                res.write('{"type":1,"msg":"恭喜，用户名可以使用"}');
                res.end();
                /*arr.push(obj.query);
                let str = JSON.stringify(arr);
                fs.writeFile('userinfo.txt',str,function (err) {
                    if(err)throw err;
                    console.log('文件保存成功');
                    res.write('{"type":1,"msg":"注册成功"}');
                    res.end();
                })*/
            }
        });
    }else{  //post
        let str = "",  //前端发过来的数据
            obj = {};

        req.on('data',function (data) {
            str += data;
        });
        req.on('end',function () {
            obj = qs.parse(str);
            let myReadStream = fs.createReadStream(__dirname + '/userinfo.txt' , 'utf8');
            //流方式读文件    __dirname当前路径
            let data = "";  //数据库的数据
            myReadStream.on('data',function (chunk) {
                data += chunk;
            });
            let arr;
            myReadStream.on('end',function () {
                data = data || '[]';
                arr = JSON.parse(data);
                //console.dir(obj);
                arr.push(obj);
                str = JSON.stringify(arr);
                fs.writeFile('userinfo.txt',str,function (err) {
                    if(err)throw err;
                    console.log('文件保存成功');
                    res.write('{"type":1,"msg":"注册成功"}');
                    res.end();
                });
            });
        });
    }
}).listen(3000,function () {
    console.log("服务器启动成功，正在监听3000端口");
});
