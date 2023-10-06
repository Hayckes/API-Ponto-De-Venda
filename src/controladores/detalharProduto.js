const detalharProdutoRepositorio = require("../repositorios/detalharProdutoRepositorio");

const detalharProduto = async (req, res) => {
    const id = req.params.id;

    try {
        const obterProduto = (await detalharProdutoRepositorio(id))[0];

        return res.status(200).json(obterProduto);
    } catch (error) {
        return res.status(500).json({mensagem: 'Erro interno do servidor'});
    }
}

module.exports = detalharProduto;