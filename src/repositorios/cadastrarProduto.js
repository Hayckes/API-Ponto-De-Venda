const knex = require('../config/db/conexao');

const cadastrarProduto = ({
  descricao,
  quantidade_estoque,
  valor,
  categoria_id,
}) => {
  return knex('produtos')
    .insert({
      descricao,
      quantidade_estoque,
      valor,
      categoria_id,
    })
    .returning('*');
};

module.exports = cadastrarProduto;
