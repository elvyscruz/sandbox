const authorize = (req, res, next) => {
  const { user } = req.query

  if (user === 'john') {
    console.log('user is authorized!')
    req.user = { name: user, id: 0 }
    next()
  } else {
    res.status(401).send('Unathorized')
  }
}

module.exports = authorize
