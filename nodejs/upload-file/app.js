const express = require('express')
const app = express()

const fileupload = require('express-fileupload')
app.use(express.static('./public'))

app.use(fileupload({ useTempFiles: true }))

app.post('/api/v1/upload', (req, res) => {
  if (!req.files) {
    res.status(401).end('No file uploaded')
  }

  const uploadedfile = req.files.file
  if (!uploadedfile.mimetype.endsWith('pdf')) {
    res.end('Please provide a pdf file')
  }

  console.log(req.files)
  res.end('file uploaded!!')
})

app.listen(5000)
