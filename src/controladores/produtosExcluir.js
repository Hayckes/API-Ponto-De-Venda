const excluirProdutos = require('../repositorios/excluirProdutos');

const produtosExcluir = async (req, res) => {
  const { id } = req.params;

  try {
    const existeProduto = await excluirProdutos({ id });

    if (!existeProduto) {
      return res.status(400).json({ mensagem: 'Produto não encontrado' });
    }

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
};

module.exports = produtosExcluir;
