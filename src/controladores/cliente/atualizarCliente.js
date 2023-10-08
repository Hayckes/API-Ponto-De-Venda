const clienteRepositorio = require('../../repositorios/cliente/clienteRepositorio');

const atualizarCliente = async (req, res) => {
  const { id } = req.params;

  try {
    const clientes = await clienteRepositorio.encontrarClientePorId(id);

    if (!clientes[0]) {
      return res.status(404).json({ mensagem: 'Cliente não existe' });
    }

    const clienteAtualizado = await clienteRepositorio.atualizarCliente({
      id, ...req.body
    });

    return res.status(200).json(clienteAtualizado[0]);
  } catch (error) {

    if (error.constraint == 'usuarios_email_key') {
      return res.status(400).json({ mensagem: 'Email já existe' });
    }
    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
}

module.exports = atualizarCliente;
