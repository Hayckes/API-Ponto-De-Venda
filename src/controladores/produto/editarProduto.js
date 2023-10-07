const produtoRepositorio = require('../../repositorios/produto/produtoRepositorio');
const categoriaRepositorio = require('../../repositorios/categoria/categoriaRepositorio');

async function editarProdutos(req, res) {
  const { descricao, quantidade_estoque, valor, categoria_id } = req.body;
  const { id } = req.params;
  try {
    const produtos = await produtoRepositorio.encontrarProdutoPorId(id);

    if (!produtos[0]) {
      return res.status(404).json({ mensagem: 'Produto não existente' });
    }
    const categoria = await categoriaRepositorio.listarCategoriasPorId(categoria_id);

    if (!categoria[0]) {
      return res.status(404).json({ mensagem: 'Categoria não existente' });
    }

    await produtoRepositorio.editarProduto({
      id,
      descricao,
      quantidade_estoque,
      valor,
      categoria_id,
    });

    return res.status(204).json();
  } catch (error) {

    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
}

module.exports = editarProdutos;
