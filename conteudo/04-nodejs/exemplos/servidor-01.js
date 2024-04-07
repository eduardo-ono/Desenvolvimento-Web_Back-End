/*
  Criado em     : 30/09/2022
  Atualizado em : 12/10/2022
  Referências   : https://www.youtube.com/watch?v=InFf2RTx9o8
*/

// Importa o módulo http (CommonJS, nativo do node.js)
const http = require('http');
const hostname = 'localhost'; // Geralmente 127.0.0.1
const port = 8081;

const server = http.createServer((req, res) => {
  res.setHeader('content-type', 'text/html; charset=utf-8');
  switch (req.url) {
    case '/':
      res.end('<h1>Home Page</h1>');
      break;
    case '/about':
      res.end('<h1>Sobre</h1>');
      break;
    default:
      res.statusCode = 404;
      res.end('<p>Página não encontrada!</p>');
  }
});

server.listen(port, hostname, () => {
  console.log(`--> Server running at http://${hostname}:${port}/`);
  console.log(`--> Tecle ^C para finalizar...`);
});
