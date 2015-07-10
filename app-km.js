
var http = require('http');
var pmx = require('pmx');

const PORT = 8001;

var normal_mode = function(req, res) {
  res.writeHead(200);
  res.end('Hello Shenzhen!');
};

var maintenance_mode = function(req, res) {
  res.writeHead(200);
  res.send('Sorry, maintenance mode');
};

http.createServer(function(req, res) {

  res.writeHead(200);
  res.end('Hello Shenzhen!');

}).listen(PORT, function() {
  console.log('Listening on port: %d', PORT);
});
