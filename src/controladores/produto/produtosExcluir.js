const produtoRepositorio = require('../../repositorios/produto/produtoRepositorio');

const produtosExcluir = async (req, res) => {
  const { id } = req.params;

  try {
    const pedido = await produtoRepositorio.encontrarPedidosPorId({ id });

    if (pedido.length > 0) {
      return res.status(400).json({ mensagem: `Produto não pode ser excluído! O produto está sendo utilizado.` });
    }

    const existeProduto = await produtoRepositorio.excluirProdutos({ id });

    if (!existeProduto) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

    return res.status(204).send();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
};

module.exports = produtosExcluir;
