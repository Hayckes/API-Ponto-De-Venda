const listarProdutos = require('../repositorios/listarProdutos');

//listar produtos por categoria_id e/ou todos
const produtosListar = async (req, res) => {
  const categoria_id = req.query;

  try {
    // Verifique se o parâmetro categoria_id foi fornecido
    if (categoria_id) {
      const produtosFiltrados = await listarProdutos(categoria_id);
      return res.status(200).json(produtosFiltrados);
    }
    const listaDeCategorias = await listarProdutos();

    return res.status(200).json(listaDeCategorias);
  } catch (error) {
    return res.status(500).json({ mensagem: 'TEST Erro interno no servidor' });
  }
};

module.exports = produtosListar;
