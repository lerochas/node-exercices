var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {contentType: 'text/plain'});
  res.end('Hello, world!');
}).listen(1337, '127.0.0.1');