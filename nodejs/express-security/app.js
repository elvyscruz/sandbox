const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimit = require('express-rate-limit')

const app = express()

app.use(helmet())
app.use(cors())
app.use(xss())

const limiter = rateLimit({
	windowMs:  15 * 60 * 1000, // 15 minutes
	max: 100 // Limit each IP to 100 request per windowMs
})

app.use(limiter)

app.get('/',(req,res)=>{
	res.send('hello world!\n')
})

app.listen(5000)


