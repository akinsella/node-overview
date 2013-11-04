var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Open-XKE\n');
}).listen(9000, 'localhost');

console.log('Server running at http://localhost:9000/');