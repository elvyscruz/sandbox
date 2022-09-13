const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const app = express()

app.use(express.json())

app.post('/login', (req, res) => {
  const { username, password } = req.body
  if (!username || !password) res.status(401).send('Please provide a username and password')

  // just for demo, normally provided by DB

  const id = Date.now()
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })

  res.status(200).json({ success: true, msg: 'user created', token: token })
})

app.get('/check', (req, res) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    res.status(401).json({ success: false, msg: 'No token provided' })
  }
  const token = authHeader.split(' ')[1]
  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  const { id, username } = decoded
  res.status(200).json({ success: true, id, username })
})

app.listen(3000)
