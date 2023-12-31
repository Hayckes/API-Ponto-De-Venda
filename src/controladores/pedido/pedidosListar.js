const consultarPedidos = require('../../repositorios/pedido/listarPedidos');

const pedidosListar = async (req, res) => {
  const { cliente_id } = req.query;

  try {
    if (cliente_id) {
      const listarIdPedidos = await consultarPedidos(cliente_id);
      return res.status(200).json(listarIdPedidos);
    }

    const listarTodosPedidos = await consultarPedidos();
    return res.status(200).json(listarTodosPedidos);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
};

module.exports = pedidosListar;
