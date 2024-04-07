/*
  Criado em     : 2021
  Atualizado em : 12/10/2022
  Referência    : https://www.youtube.com/watch?v=DiXbJL3iWVs
*/

const os = require('os')

console.log(os.platform());

const loop = () => {
  const { totalmem, freemem } = os;
  const memTotal = totalmem() / 1024.0 / 1024 / 1024; // GB
  const memDisponivel = freemem() / 1024.0 / 1024 / 1024; // GB
  const stats = {
    total: `${memTotal.toFixed(2)} GB`,
    disponivel: `${memDisponivel.toFixed(2)} GB`,
  }
  console.clear();
  console.table(stats);
  console.log('Tecle ^C para sair...');
}

setInterval(loop, 1000);
