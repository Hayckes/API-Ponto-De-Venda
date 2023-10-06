const knex = require('../../config/db/conexao');

const listarProdutos = ({ categoria_id }) => {
  if (categoria_id) {
    const produtosPorID = knex('produtos').where('categoria_id', categoria_id);
    return produtosPorID;
  }

  const todosProdutos = knex('produtos');
  return todosProdutos;
};

module.exports = listarProdutos;
