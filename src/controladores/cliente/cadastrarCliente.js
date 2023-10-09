const clienteRepositorio = require("../../repositorios/cliente/clienteRepositorio");

const cadastrarCliente = async (req, res) => {

  try {

    const cliente = (await clienteRepositorio.cadastrarCliente(req.body))[0];

    return res.status(201).json(cliente);

  } catch (error) {
    if (error.constraint == 'clientes_email_key') {
      return res.status(400).json({ mensagem: 'Email já existe' });
    }

    if (error.constraint == 'clientes_cpf_key') {
      return res.status(400).json({ mensagem: 'CPF já existe' });
    }

    return res.status(500).json({ mensagem: 'Erro interno no servidor.' });
  }
}

module.exports = cadastrarCliente;
