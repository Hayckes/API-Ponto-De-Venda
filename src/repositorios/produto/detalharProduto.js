const knex = require('../../config/db/conexao');

const detalharProduto = (id) => {
  return knex.select().from('produtos').where({ id });
};

module.exports = detalharProduto;
