const clienteRepositorio = require("../../repositorios/cliente/clienteRepositorio");

const cadastrarCliente = async (req, res) => {

  try {

    const cliente = (await clienteRepositorio.cadastrarCliente(req.body))[0];

    return res.status(201).json(cliente);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: 'Erro interno no servidor.' });
  }
}

module.exports = cadastrarCliente;
