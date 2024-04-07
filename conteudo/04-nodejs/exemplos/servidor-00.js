/*
  Criado em     : 30/09/2022
  Atualizado em : 12/10/2022
  Referências   : https://www.youtube.com/watch?v=htSV0_gatPo
                  https://www.geeksforgeeks.org/http-headers-content-type/
*/

// Importa o módulo http (nativo do node.js)
const http = require('http');
const hostname = 'localhost'; // Geralmente 127.0.0.1
const port = 8081;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'text/plain; charset=utf-8');
  res.end('Olá mundo!');
});

server.listen(port, hostname, () => {
  console.log(`--> Server running at http://${hostname}:${port}/`);
  console.log(`--> Tecle ^C para finalizar...`);
});
