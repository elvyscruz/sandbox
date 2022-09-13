const Http = require('http')
const Fs = require('fs')

Http.createServer((req, res) => {
  const filestream = Fs.createReadStream('big.txt', 'utf8')
  filestream.on('open', () => {
    filestream.pipe(res)
  })

  filestream.on('error', (err) => {
    res.end(err)
  })
}).listen(5000)

// get rid of typescript error
