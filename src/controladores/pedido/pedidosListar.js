const consultarPedidos = require('./listarPedidos');

const pedidosListar = async (req, res) => {
    const { id } = req.params;

    try {
        if (id) {
            const listarIdPedidos = await consultarPedidos(id);
            return res.status(200).json(listarIdPedidos);
        }

        const listarTodosPedidos = await consultarPedidos();
        return res.status(200).json(listarTodosPedidos);

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno no servidor' });
    }
};

module.exports = pedidosListar;
