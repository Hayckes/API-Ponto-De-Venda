const knex = require("../../config/db/conexao")

const inserirPedidoProdutos = (pedidoProdutos) => {
  return knex('pedido_produtos').insert(pedidoProdutos);
}

module.exports = inserirPedidoProdutos
