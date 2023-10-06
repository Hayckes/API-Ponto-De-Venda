const usuarioRepositorio = require('../../repositorios/usuario/usuarioRepositorio');

const perfilDetalhar = async (req, res) => {
  const id = req.usuario_id;

  try {
    const detalhesUsuario = (
      await usuarioRepositorio.encontrarUsuarioPorId(id)
    )[0];
    delete detalhesUsuario.senha;

    return res.status(200).json(detalhesUsuario);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
};

module.exports = perfilDetalhar;
