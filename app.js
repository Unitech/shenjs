
var http = require('http');

const PORT = 8000;

http.createServer(function(req, res) {

  res.writeHead(200);
  res.end('Hello Shenzhen!');

}).listen(PORT, function() {
  console.log('Listening on port: %d', PORT);
});
