const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res) => {
    res.writeHead(200 ,{"Content-Type": "text/html;charset=utf-8"})
    if (req.method === 'GET') {
        switch (req.url){
            case "/index":
                res.write(fs.readFileSync("index.html",'utf8'))
                res.write("<a href='http://locahhost:3001/home'>home</a>")
                //改成异步
                /*fs.readFile('index.html','utf8',(err, data) => {
                    res.write(data);
                    res.end()
                })*/
                //改成流
                //fs.createReadStream('./index.html').pipe(res)
                break;
            case "/home":
                res.write(fs.readFileSync("home.html",'utf8'))
                res.write("<h1>home</h1>")
                break;
            case "/user":
                res.write(fs.readFileSync("user.html",'utf8'))
                res.write("<h1>user</h1>")
                break;
            default :
                //404
                res.write(fs.readFileSync("404.html",'utf8'))
                res.write("<h1>404</h1>")
                break;
        }
    }
    res.end()
})

server.listen(3001,() => {
    console.log("正在监听3001");
})