const EventEmitter = require('events')

const myEmitter = new EventEmitter()

myEmitter.on('notify', (id, user) => {
  console.log(`data revceived from user ${user} with id ${id}`)
})

myEmitter.emit('notify', 5, 'Bob')
