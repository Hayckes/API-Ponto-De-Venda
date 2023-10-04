const { compararSenhas } = require('../utils/criptografarCompararSenha');
const encontrarUsuarioPorEmail = require('../repositorios/encontrarUsuarioPorEmail');
const { gerarToken } = require('../config/db/jwt');

const usuarioLogin = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuariosEncontrados = await encontrarUsuarioPorEmail(email);

    const usuario = usuariosEncontrados[0];

    if (usuariosEncontrados.length == 0) {
      return res.status(400).json({ mensagem: 'E-mail ou senha inválidos' });
    }

    if (!(await compararSenhas(senha, usuario.senha))) {
      return res.status(400).json({ mensagem: 'E-mail ou senha inválidos' });
    }

    const token = gerarToken(usuario.id);

    delete usuario.senha;

    return res.status(200).json({ usuario, token });
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro interno no servidor' });
  }
};

module.exports = usuarioLogin;
