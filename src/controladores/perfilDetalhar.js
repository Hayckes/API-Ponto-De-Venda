const encontrarUsuarioPorId = require('../repositorios/encontrarUsuarioPorId');

const perfilDetalhar = async (req, res) => {
  const usuario_id = req.usuario_id;

  try {
    const detalhesUsuario = (await encontrarUsuarioPorId(usuario_id))[0];
    delete detalhesUsuario.senha;

    return res.status(200).json(detalhesUsuario);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro do servidor interno' });
  }
};

module.exports = perfilDetalhar;
