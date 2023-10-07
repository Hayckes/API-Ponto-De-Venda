const clienteRepositorio = require("../../repositorios/cliente/clienteRepositorio");

const cadastrarCliente = async (req, res) => {
  const { nome, email, cpf } = req.body;

  try {

    const cliente = (await clienteRepositorio.cadastrarCliente(nome, email, cpf))[0];

    return res.status(201).json(cliente);

  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno no servidor.' });
  }
}

module.exports = cadastrarCliente;
