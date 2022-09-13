require('dotenv').config()
const express = require('express')
const sgMail = require('@sendgrid/mail')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1>Email Project</h1> <a href="/send">Send email</a>')
})

app.get('/send', (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    to: process.env.TO_EMAIL, // Change to your recipient
    from: process.env.FROM_EMAIL, // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  }

  sgMail.send(msg).then((data) => {
    res.json(data)
  })
    .catch((error) => {
      console.log(error)
    })
})

app.listen(process.env.PORT || 5000)
