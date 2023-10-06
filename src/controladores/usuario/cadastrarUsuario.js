const { criptograrSenha } = require('../../utils/criptografarCompararSenha');
const usuarioRepositorio = require('../../repositorios/usuario/usuarioRepositorio');

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const senhaCriptografada = await criptograrSenha(senha);

    const usuario = (
      await usuarioRepositorio.cadastrarUsuario({
        nome,
        email,
        senha: senhaCriptografada,
      })
    )[0];

    delete usuario.senha;

    return res.status(201).json(usuario);
  } catch (error) {
    if (error.constraint == 'usuarios_email_key') {
      return res.status(400).json({ mensagem: 'Email já existe' });
    }

    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
};

module.exports = cadastrarUsuario;
