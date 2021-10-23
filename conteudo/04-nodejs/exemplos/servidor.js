
var http = require('http');

const server = http.createServer( (req, res) => {
  res.end('Servidor Node.js');
});
server.listen(8081);

console.log('--> Running...');
