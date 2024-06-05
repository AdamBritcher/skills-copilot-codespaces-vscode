// Create web server using Node.js
// Create a web server that listens to port 3000 and returns the comments array as a JSON response when the path is /comments.

// The comments array is provided for you.

// Use the built-in http module and its createServer method to create the server.

// The server should listen on port 3000.

// When a client makes a GET request to the /comments path, the server should return the comments array as a JSON response.

// The server should return a 404 status code for all other paths.

// Use the JSON.stringify method to convert the comments array to a JSON string.

// The comments array:

// const comments = [
//   { username: 'ali', comment: 'I love your blog' },
//   { username: 'sam', comment: 'Nice work' },
//   { username: 'maria', comment: 'Very useful information' }
// ];

// Here is how the server should respond to a GET request to the /comments path:

// HTTP/1.1 200 OK
// Content-Type: application/json

// [
//   {"username":"ali","comment":"I love your blog"},
//   {"username":"sam","comment":"Nice work"},
//   {"username":"maria","comment":"Very useful information"}
// ]

// And here is how the server should respond to a GET request to any other path:

// HTTP/1.1 404 Not Found

const http = require('http');

const comments = [
  { username: 'ali', comment: 'I love your blog' },
  { username: 'sam', comment: 'Nice work' },
  { username: 'maria', comment: 'Very useful information' }
];

const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000);
console.log('Server listening on port 3000');
