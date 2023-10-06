const encontrarClientePorIdRepositorio = require('../repositorios/encontrarClientePorIdRepositorio');

const detalharCliente = async (req, res) => {
  const { id } = req.params;

  try {
    const cliente = (await encontrarClientePorIdRepositorio(id))[0];

    if (!cliente) {
      return res.status(404).json({ mensagem: 'Cliente não encontrado!' });
    }

    return res.status(200).json(cliente);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
};

module.exports = detalharCliente;
