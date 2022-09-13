const express = require('express')
const app = express()
app.get('/api/v1/params', (req, res) => {
  res.json(req.query)
	}).listen(process.env.PORT || 5000)

