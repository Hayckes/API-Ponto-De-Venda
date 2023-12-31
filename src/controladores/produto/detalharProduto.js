const produtoRepositorio = require('../../repositorios/produto/produtoRepositorio');

const detalharProduto = async (req, res) => {
  const id = req.params.id;

  try {
    const obterProduto = (await produtoRepositorio.detalharProduto(id))[0];

    if (!obterProduto) {
      return res.status(404).json({ menssagem: "Produto não encontrado"});
    }

    return res.status(200).json(obterProduto);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};

module.exports = detalharProduto;
