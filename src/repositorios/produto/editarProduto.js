const knex = require('../../config/db/conexao');

const editarProduto = ({
  id,
  descricao,
  quantidade_estoque,
  valor,
  categoria_id,
}) => {
  return knex('produtos')
    .update({ descricao, quantidade_estoque, valor, categoria_id })
    .where({ id });
};

module.exports = editarProduto;
