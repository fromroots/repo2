const http = require('http');
const fs = require('fs');
var index = fs.readFileSync('index.html');
const port = process.env.PORT || 80;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(index);
});
server.listen(port, () => {
  console.log(`Server running at http://${port}/`);
});