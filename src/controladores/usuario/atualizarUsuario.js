const { criptograrSenha } = require('../../utils/criptografarCompararSenha');
const usuarioRepositorio = require('../../repositorios/usuario/usuarioRepositorio');

async function atualizarUsuario(req, res) {
  try {
    const { nome, email, senha } = req.body;
    const id = req.usuario_id;

    const senhaCriptografada = await criptograrSenha(senha);

    await usuarioRepositorio.atualizarUsuario({
      id,
      nome,
      email,
      senha: senhaCriptografada,
    });

    return res.status(204).json();
  } catch (error) {
    if (error.constraint == 'usuarios_email_key') {
      return res.status(400).json({ mensagem: 'Email já existe' });
    }

    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
}

module.exports = atualizarUsuario;
