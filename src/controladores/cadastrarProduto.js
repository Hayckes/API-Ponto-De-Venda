const cadastrarProdutoRepositorio = require('../repositorios/cadastrarProduto');
const listarCategoriasPorIdRepositorio = require('../repositorios/listarCategoriasPorId');

const cadastrarProduto = async (req, res) => {
  const { descricao, quantidade_estoque, valor, categoria_id } = req.body;

  try {
    const listarCategoria = (
      await listarCategoriasPorIdRepositorio(categoria_id)
    )[0];

    if (!listarCategoria) {
      return res.status(404).json({ mensagem: 'Categoria não encontrada' });
    }

    const produto = (
      await cadastrarProdutoRepositorio({
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
