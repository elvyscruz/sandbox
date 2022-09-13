const notFound = (req, res) => {
  res.statu(404).send('Route does not exists')
}

module.exports = notFound
