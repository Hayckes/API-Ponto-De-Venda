const editarClienteDB = require('../repositorios/editarCliente');
const encontrarClientePorId = require('../repositorios/encontrarClientePorId');
const validarCamposObrigatorios = require('../utils/validarCamposObrigatorios');

async function editarCliente(req, res) {
  const { nome, email, cpf } = req.body;
  const { id } = req.params;
  try {
    const campos = validarCamposObrigatorios({ nome, email, cpf });
    if (campos.result) {
      return res.status(404).json({
        mensagem: `É necessario informar os seguintes campos: ${campos.missingFields}`,
      });
    }
    const clientes = await encontrarClientePorId(id);

    if (!clientes[0]) {
      return res.status(404).json({ mensagem: 'Produto não existente' });
    }

    await editarClienteDB({
      id,
      nome,
      email,
      cpf,
    });

    return res.status(204).json();
  } catch (error) {
    console.log(error);

    if (error.constraint == 'usuarios_email_key') {
      return res.status(400).json({ mensagem: 'Email já existe' });
    }
    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
}

module.exports = editarCliente;
