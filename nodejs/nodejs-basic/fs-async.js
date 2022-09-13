const { readFile, writeFile } = require('fs')

console.log('start...')

readFile('test.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
})

writeFile('test.txt', new Date().toLocaleString(), { flag: 'a' }, (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('done writing to to file..\n')
})

console.log('end...')
