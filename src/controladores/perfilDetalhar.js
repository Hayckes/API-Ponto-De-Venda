const detalharPerfil = require("../repositorios/detalharPerfil");

const perfilDetalhar = async (req, res) => {
  const usuario_id = req.usuario_id;

  try {
    const detalhesUsuario = await detalharPerfil(usuario_id);
    delete detalhesUsuario[0].senha

    return res.status(200).json(detalhesUsuario[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


module.exports = perfilDetalhar;
