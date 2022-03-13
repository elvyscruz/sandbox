const http = require('http')
http.get({
  hostname: 'localhost',
  port: 5000,
  path: '/?name=elvys&lastname=cruz'
}, (res) => {
  res.setEncoding('utf8')
  res.on('data', (chunk) => { console.log(chunk) })
})
