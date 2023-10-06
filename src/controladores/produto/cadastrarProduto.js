const produtoRepositorio = require('../../repositorios/produto/produtoRepositorio');
const categoriaRepositorio = require('../../repositorios/categoria/categoriaRepositorio');

const cadastrarProduto = async (req, res) => {
  const { descricao, quantidade_estoque, valor, categoria_id } = req.body;

  try {
    const listarCategoria = (
      await categoriaRepositorio.listarCategoriasPorId(categoria_id)
    )[0];

    if (!listarCategoria) {
      return res.status(404).json({ mensagem: 'Categoria não encontrada' });
    }

    const produto = (
      await produtoRepositorio.cadastrarProduto({
        descricao,
        quantidade_estoque,
        valor,
        categoria_id,
      })
    )[0];

    return res.status(201).json(produto);
  } catch (error) {
    if (error.constraint == 'usuarios_email_key') {
      return res.status(400).json({ mensagem: 'Email já existe' });
    }

    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
};

module.exports = cadastrarProduto;
