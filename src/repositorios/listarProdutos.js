const knex = require('../config/db/conexao');

const listarProdutos = ({ categoria_id }) => {
  if (categoria_id) {
    const produtosPorID = knex
      .select()
      .from('produtos')
      .where('categoria_id', categoria_id);
    return produtosPorID;
  }

  const todosProdutos = knex.select().from('produtos');
  return todosProdutos;
};

module.exports = listarProdutos;
