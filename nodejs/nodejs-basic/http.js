const http = require('http')
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  const urlObject = new URL(req.headers.host + req.url)
  const data = {}
  urlObject.searchParams.forEach((name, value) => {
    data[value] = name
  })
  res.end(JSON.stringify(data))
}).listen(5000)
