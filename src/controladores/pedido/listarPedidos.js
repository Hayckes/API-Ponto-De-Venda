const knex = require('../../config/db/conexao');

const consultarPedidos = async (id) => {
    try {
        let pedidos;

        if (id) {
            pedidos = await knex('pedidos')
                .select('pedidos.id as pedido_id', 'pedidos.observacao', 'pedidos.cliente_id', 'pedido_produtos.id as produto_id', 'pedido_produtos.quantidade_produto', 'pedido_produtos.valor_produto', 'pedido_produtos.produto_id')
                .join('pedido_produtos', 'pedidos.id', 'pedido_produtos.pedido_id')
                .where('pedidos.id', id);
        } else {

            pedidos = await knex('pedidos')
                .select('pedidos.id as pedido_id', 'pedidos.observacao', 'pedidos.cliente_id')
                .leftJoin('pedido_produtos', 'pedidos.id', 'pedido_produtos.pedido_id');
        }

        const pedidosAgrupados = {};

        pedidos.forEach((row) => {
            if (!pedidosAgrupados[row.pedido_id]) {
                pedidosAgrupados[row.pedido_id] = {
                    pedido: {
                        id: row.pedido_id,
                        observacao: row.observacao,
                        cliente_id: row.cliente_id,
                        valor_total: 0,
                    },
                    pedido_produtos: [],
                };
            }

            const valorProduto = row.valor_produto * row.quantidade_produto;
            pedidosAgrupados[row.pedido_id].pedido_produtos.push({
                id: row.produto_id,
                quantidade_produto: row.quantidade_produto,
                valor_produto: row.valor_produto,
                pedido_id: row.pedido_id,
                produto_id: row.produto_id,
            });

            pedidosAgrupados[row.pedido_id].pedido.valor_total += valorProduto;
        });

        return Object.values(pedidosAgrupados);

    } catch (error) {
        throw error;
    }
};

module.exports = consultarPedidos;
