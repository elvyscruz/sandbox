exports.handler = async function (event, context) {
  return 'hello world';
};

AWS = require('aws-sdk')

ssm = new AWS.SS()

async getParam (param) {
  await ssm.getParameter(params).promise()).Parameter.Value
}
