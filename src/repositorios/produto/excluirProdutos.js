const knex = require('../../config/db/conexao');

const excluirProdutos = ({ id }) => {
  const produtoExcluido = knex('produtos').where('id', id).del().returning('*');
  return produtoExcluido;
};

module.exports = excluirProdutos;
