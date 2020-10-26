const http = require('http'); // library used to create http servers
const url = require('url');

const server = http.createServer(function (request, response) {
  // request object represents a request being made by a client
  const params = url.parse(request.url, true);
  console.log(params);
  // response objects represents the response the server will build and send back to the client
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(`<!DOCTYPE html>
  <html>
  <head>
    <title>My first web server</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
  </html>`);
  response.end();
});

const PORT = 4000;
// const HOST = 'localhost'
const HOST = '127.0.0.1';
server.listen(PORT, HOST);
console.log(`Server is listening on ${HOST}:${PORT}`);