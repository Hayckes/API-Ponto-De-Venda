const knex = require("../../config/db/conexao");

const cadastrarPedido = ({
  cliente_id,
  observacao,
  valor_total
}) => {
  return knex('pedidos').insert({
    cliente_id,
    observacao,
    valor_total
  }).returning('*');
}

module.exports = cadastrarPedido
