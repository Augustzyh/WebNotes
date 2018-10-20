const http = require("http")
//const request = require('http').request
const fn = response => {
    let data = {}
    const options = {
        host: 'localhost',
        port: 3003,
        method: 'get',
        path: '/'
    }
    const reqObj = http.request(options,res => {
        res.setEncoding("utf8")
        //console.log(res);
        res.on('data',(chunk) => {
            console.log(chunk);
            data = chunk;
        })
        res.on('end',() => {
            response.end(data)
            console.log("请求结束")
        })
    })
    reqObj.write('')
    reqObj.end()
}

const server = http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    fn(res)
    /*const obj = {
        a: 1,
        b: 2
    }
    //cors 跨域 设置请求头
    res.setHeader('Access-Control-Allow-Origin','*')
    res.write(JSON.stringify(obj))
    res.end()*/
})

server.listen(3002)