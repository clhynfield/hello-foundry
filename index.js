'use strict';

// Load the http module to create an http server.
var http = require('http');

var listenPort = process.env.VCAP_APP_PORT || 8000;

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
  console.log('Another happy world served!');
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(listenPort);

// Put a friendly message on the terminal
console.log('Server running on port ' + listenPort);
