const http = require('http')

const options = {
  host: "localhost",
  port: 3001,
  method: "get",
  path: "/"
}

const fn = response => {
  let data = {}
  const requestObj = http.request(options, res => {
    res.setEncoding("utf8")
    
    res.on("data", (chunk) => {
      data = chunk
    })
  
    res.on("end", () => {
      response.end(data)
    })
  })
  
  requestObj.on("error", err =>{
    console.log(err)
  })
  requestObj.write("")
  requestObj.end()
}

const server = http.createServer((req, res) => {
  // CORS 跨域
  res.setHeader('Access-Control-Allow-Origin', "*")
  fn(res)
})

server.listen(3000, () => {
  console.log("服务监听在localhost 3000端口")
})