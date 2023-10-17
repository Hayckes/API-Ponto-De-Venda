const knex = require('../../config/db/conexao');

const atualizarProdutos = ({
  id,
  quantidade_estoque,
  valor,
  categoria_id
}) => {
  return knex('produtos')
    .where({ id })
    .update({
      quantidade_estoque,
      valor,
      categoria_id
    });
}

module.exports = atualizarProdutos;
