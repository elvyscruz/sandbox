const http = require('http')

const options = {
  host: 'localhost',
  port: 5000,
  path: '/?firstname=john&lastname=doe'
}

const callback = response => {
  let str = ''
  response.on('data', chunk => {
    str += chunk
  })

  response.on('end', () => {
    console.log(str)
  })
}

http.request(options, callback).end()
