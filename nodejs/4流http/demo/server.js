const http = require('http')

http.createServer((req, res) => {
  const obj = {
    a: 1,
    b: 2
  }

  res.write(JSON.stringify(obj))
  res.end()
}).listen(3001)