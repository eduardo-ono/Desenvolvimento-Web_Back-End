
// Referência: https://www.youtube.com/watch?v=htSV0_gatPo

// Importa o módulo http (nativo do node.js)
const http = require('http');
const hostname = 'localhost'; // Geralmente 127.0.0.1
const port = 8081;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Olá mundo!');
});
server.listen(port, hostname, () => {
  console.log(`--> Server running at http://${hostname}:${port}/`);
});
