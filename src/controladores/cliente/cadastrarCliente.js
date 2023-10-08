const cadastrarClienteRepositorio = require("../../repositorios/cliente/cadastrarCliente");
// const clienteRepositorio = require("../../repositorios/cliente/cadastrarCliente");

const cadastrarCliente = async (req, res) => {
  const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;

  try {

    const cliente = (await cadastrarClienteRepositorio(
      nome, email, cpf, cep, rua, numero, bairro, cidade, estado))[0];

    return res.status(201).json(cliente);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: 'Erro interno no servidor.' });
  }
}

module.exports = cadastrarCliente;
