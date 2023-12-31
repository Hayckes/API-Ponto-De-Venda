const { compararSenhas } = require('../../utils/criptografarCompararSenha');
const usuarioRepositorio = require('../../repositorios/usuario/usuarioRepositorio');
const { gerarToken } = require('../../config/jwt');

const usuarioLogin = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuariosEncontrados =
      await usuarioRepositorio.encontrarUsuarioPorEmail(email);

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
