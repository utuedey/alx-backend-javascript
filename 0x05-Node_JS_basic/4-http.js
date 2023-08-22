/**
* a simple http server
*/
const app = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const server = app.createServer((req, res) => {
  res.status_code = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello Holberton School!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
