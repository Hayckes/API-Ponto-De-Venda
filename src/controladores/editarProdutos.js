const editarProduto = require('../repositorios/editarProduto');
const encontrarCategoria = require('../repositorios/encontrarCategoria');
const encontrarProdutoPorId = require('../repositorios/encontrarProdutoPorId');

async function editarProdutos(req, res) {
  const { descricao, quantidade_estoque, valor, categoria_id } = req.body;
  const { id } = req.params;
  try {
    const produtos = await encontrarProdutoPorId(id);

    if (!produtos[0]) {
      return res.status(404).json({ mensagem: 'Produto não existente' });
    }
    const categoria = await encontrarCategoria(categoria_id);

    if (!categoria[0]) {
      return res.status(404).json({ mensagem: 'Categoria não existente' });
    }

    await editarProduto({
      id,
      descricao,
      quantidade_estoque,
      valor,
      categoria_id,
    });

    return res.status(204).json();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
}

module.exports = editarProdutos;
