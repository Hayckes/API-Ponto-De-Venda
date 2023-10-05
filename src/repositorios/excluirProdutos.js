const knex = require('../config/db/conexao');

const excluirProdutos = ({ id }) => {
  const produtoExcluido = knex('produtos').where('id', id).del();

  return produtoExcluido;
};

module.exports = excluirProdutos;
