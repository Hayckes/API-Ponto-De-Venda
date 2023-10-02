const jwt = require('jsonwebtoken');
const { compararSenhas } = require('../utils/criptografarCompararSenha');
const encontrarUsuarioPorEmail = require('../repositorios/encontrarUsuarioPorEmail');
const { JWT_HASH } = process.env;

const usuarioLogin = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuariosEncontrados = await encontrarUsuarioPorEmail(email);

    const usuario = usuariosEncontrados[0];

    if (usuariosEncontrados.length == 0) {
      return res.status(404).json({ mensagem: 'E-mail ou senha inválidos' });
    }

    if (!(await compararSenhas(senha, usuario.senha))) {
      return res.status(401).json({ mensagem: 'E-mail ou senha inválidos' });
    }

    const token = jwt.sign({ id: usuario.id }, JWT_HASH, {
      expiresIn: '15m',
    });

    delete usuario.senha;

    return res.status(200).json({ usuario, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = usuarioLogin;
