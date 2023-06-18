/*
 * Primary file for the API
 *
 */

// Dependendencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
// The server should respond to all requests with a string

const server = http.createServer((req, res) => {
  // get the url and parse it
  const parsedUrl = url.parse(req.url, true);

  // get the path
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // get the method
  const method = req.method.toLowerCase();

  // get the query string as an object
  const query = parsedUrl.query;

  const decoder = new StringDecoder('utf8');
  let buffer = '';

  req.on('data', (data) => (buffer += decoder.write(data)));

  req.on('end', () => {
    buffer += decoder.end();

    // choose the handler
    const chosenHandler =
      typeof router[trimmedPath] !== 'undefined'
        ? router[trimmedPath]
        : handler.notFound;

    const data = {
      path: path,
      query: query,
      method: method,
      payload: buffer,
    };

    // Route the request to the handler

    chosenHandler(data, (statusCode, payload) => {
      // use status code called back the handler or default to 200
      statusCode = typeof statusCode == 'number' ? statusCode : 200;

      // use the payload of the handler or default to 200
      payload = typeof payload == 'object' ? payload : {};

      // convert payload to string
      const payloadString = JSON.stringify(payload);

      // return response
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(statusCode);
      res.end(payloadString);

      console.log('returning this response', statusCode, payloadString);
    });
  });
});

// start server and listen on port 3000

server.listen(3000, () => console.log('listening on port 3000'));

// define handler

const handler = {};
// define request router

handler.sample = (data, callback) => {
  // Callback a http status code and a payload object
  callback(406, { name: 'sample handler' });
};

// not found controller
handler.notFound = (data, callback) => {
  callback(404);
};

const router = {
  sample: handler.sample,
  notFound: handler.notFound,
};
