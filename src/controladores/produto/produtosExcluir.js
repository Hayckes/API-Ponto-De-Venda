const produtoRepositorio = require('../../repositorios/produto/produtoRepositorio');

const produtosExcluir = async (req, res) => {
  const { id } = req.params;

  try {
    const existeProduto = await produtoRepositorio.excluirProdutos({ id });

    if (!existeProduto) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
};

module.exports = produtosExcluir;
