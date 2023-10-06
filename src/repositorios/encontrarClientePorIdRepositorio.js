const knex = require('../config/db/conexao');

const encontrarClientePorIdRepositorio = (id) => {
  return knex('clientes').select('*').where({ id });
};

module.exports = encontrarClientePorIdRepositorio;
