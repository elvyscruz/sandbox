// check username, password in  post(login) request
// if exist create a new JWT
// send back to front-end
// setup authentication so only request with JWT can access the dashboard

const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors')

const login = async (req, res) => {
  const { username, password } = req.body
  // mongoose validation
  // Joi
  // check the controller

  if (!username || !password) {
    throw new BadRequestError('Please provide email and password..')
  }

  // just for demo, normally provided by DB

  const id = new Date().getDate()

  // just for demo, in production use long, complex string value!!

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
  res.status(200).send({ msg: 'user created', token })
}

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100)

  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`
  })
}

module.exports = { login, dashboard }
