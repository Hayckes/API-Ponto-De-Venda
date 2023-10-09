const knex = require('../../config/db/conexao');

const encontrarClientePorId = (id) => {
  return knex('clientes').select('*').where({ id });
};

module.exports = encontrarClientePorId;
