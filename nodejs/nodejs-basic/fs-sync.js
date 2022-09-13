const { readFileSync, writeFileSync } = require('fs')
console.log('start')

writeFileSync('test.txt', 'Hello World!!\n')

const data = readFileSync('test.txt', 'utf8')
console.log(data)

console.log('end')
