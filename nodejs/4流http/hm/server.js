const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
    if(req.method === 'GET') {
        switch (req.url) {
            case '/':
                res.write(fs.readFileSync('./nav.html'))
                res.write(`<div id='content'>你好啊，这里是首页</div>`)
                res.end()
                break;
            case '/first':
                res.write(fs.readFileSync('./nav.html'))
                res.write(`<div id='content'>你好啊，这里是次页</div>`)
                res.end()
                break;
            case '/second':
                res.write(fs.readFileSync('./nav.html'))
                res.write(`<div id='content'>你好啊，这里是次次页</div>`)
                res.end()
                break;
            case '/next':
                res.write(fs.readFileSync('./nav.html'))
                res.write(`<div id='content'>你好啊，这里是末页</div>`)
                res.end()
                break;
            case '/last':
                res.write(fs.readFileSync('./nav.html'))
                res.write(`<div id='content'>你好啊，这里是尾页</div>`)
                res.end()
                break;
        }
    }
    res.end()
})
server.listen(3004,() => {
    console.log('3004:listening');
})