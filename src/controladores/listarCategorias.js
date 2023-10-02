const listaCategorias = require('../repositorios/listarCategorias');

const listarCategorias = async (req, res) => {
  try {
    const listaDeCategorias = await listaCategorias.categorias();

    return res.status(200).json(listaDeCategorias);
  } catch (error) {
    return res.status(404).json({
      mensagem: 'O servidor não pode encontrar o recurso solicitado.',
    });
  }
};

module.exports = listarCategorias;
