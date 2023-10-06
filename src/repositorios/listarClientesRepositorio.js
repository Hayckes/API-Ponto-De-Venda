const knex = require('../config/db/conexao');

const listarClientesRepositorio = () => {
  return knex.select().from('clientes');
};

module.exports = listarClientesRepositorio;
