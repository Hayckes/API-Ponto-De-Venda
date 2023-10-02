const listaCategorias = require('../repositorios/listarCategorias');

const listarCategorias = async (req, res) => {
  try {
    const listaDeCategorias = await listaCategorias();

    return res.status(200).json(listaDeCategorias);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro do servidor interno' });
  }
};

module.exports = listarCategorias;
