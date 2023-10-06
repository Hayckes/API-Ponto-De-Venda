const listarClientesRepositorio = require('../repositorios/listarClientesRepositorio');

const listarClientes = async (req, res) => {
  try {
    const listaDeClientes = await listarClientesRepositorio();

    return res.status(200).json(listaDeClientes);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
};

module.exports = listarClientes;
