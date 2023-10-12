const knex = require('../../config/db/conexao');

const cadastrarProdutos = ({
  descricao,
  quantidade_estoque,
  valor,
  categoria_id, imagem
}) => {
  return knex('produtos')
    .insert({
      descricao,
      quantidade_estoque,
      valor,
      categoria_id,
      produto_imagem: imagem
    })
    .returning('*');
};

module.exports = cadastrarProdutos;
