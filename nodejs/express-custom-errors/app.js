const express = require('express')
const app = express()

class customError extends Error {
	constructor(message, statusCode=500){
		super(message)
		this.statusCode = statusCode 
	}
}

const errorHandlerMiddleware = (err,req, res,next)=>{
	return res.status(err.statusCode).json({msg: err.message})
}

const not_found = (req,res)=> res.status(404).send('Route does not exist')


app.get('/', (req,res)=>{
	
res.send('Hello there.....')
})

app.get('/hello', (req,res)=>{
	const { name, lastname } = req.query

	if(typeof name === 'undefined' || typeof lastname === 'undefined') {
		throw new customError('Please provide name and lastname', 401)
	}
res.send(`Hello ${name} ${lastname }, welcome back!`)
})

 
app.use(errorHandlerMiddleware)
app.use(not_found)
app.listen(5000)



