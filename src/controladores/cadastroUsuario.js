const { criptograrSenha } = require('../utils/criptografarCompararSenha');
const cadastrarUsuario = require('../repositorios/cadastrarUsuario');

const cadastroUsuarios = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const senhaCriptografada = await criptograrSenha(senha);

    await cadastrarUsuario({ nome, email, senha: senhaCriptografada });

    return res.status(201).json();
  } catch (error) {
    if (error.constraint == 'usuarios_email_key') {
      return res.status(400).json({ mensagem: 'Email já existe' });
    }

    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
};

module.exports = cadastroUsuarios;
