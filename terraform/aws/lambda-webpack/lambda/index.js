const { v4: uuidv4 } = require('uuid');

exports.handler =  async function(event, context) {
  const uuid = uuidv4()
  return {uid: `uuid value is ${uuid}`}
}