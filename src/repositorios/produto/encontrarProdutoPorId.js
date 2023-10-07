const knex = require('../../config/db/conexao');

const encontrarProdutoPorId = (id) => {
  return knex('produtos').select('*').where({ id });
};

module.exports = encontrarProdutoPorId;
