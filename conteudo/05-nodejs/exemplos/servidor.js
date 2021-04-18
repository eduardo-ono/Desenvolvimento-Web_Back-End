
var http = require('http');

const server = http.createServer(function (req, res) {
  res.end('Servidor Node.js');
});
server.listen(8081);

console.log('--> Running...');
