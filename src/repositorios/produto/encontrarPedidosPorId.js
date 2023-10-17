const knex = require('../../config/db/conexao');

const encontrarPedidosPorId = ({ id }) => {
    return knex('pedido_produtos').where('produto_id', id).debug();
}

module.exports = encontrarPedidosPorId;