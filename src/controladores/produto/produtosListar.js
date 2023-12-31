const produtoRepositorio = require('../../repositorios/produto/produtoRepositorio');

const produtosListar = async (req, res) => {
  const categoria_id = req.query;

  try {
    if (categoria_id) {
      const produtosFiltrados =
        await produtoRepositorio.listarProdutos(categoria_id);
      return res.status(200).json(produtosFiltrados);
    }
    const listaDeCategorias = await produtoRepositorio.listarProdutos();

    return res.status(200).json(listaDeCategorias);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
};

module.exports = produtosListar;
