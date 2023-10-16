const produtoRepositorio = require('../../repositorios/produto/produtoRepositorio');
const categoriaRepositorio = require('../../repositorios/categoria/categoriaRepositorio');
const { uploadFile } = require('../../utils/storage');

const produtoCadastrar = async (req, res) => {
  const { descricao, quantidade_estoque, valor, categoria_id, imagem } = req.body;
  const { file } = req;

  //console.log(req.body, req.file);

  try {
    const listarCategoria = (
      await categoriaRepositorio.listarCategoriasPorId(categoria_id)
    )[0];

    if (!listarCategoria) {
      return res.status(404).json({ mensagem: 'Categoria não encontrada' });
    }

    //upload da imagem
    const arquivo = await uploadFile(
      `produtos/${file.originalname}`,
      file.buffer,
      file.mimetype
    );

    const produto = (
      await produtoRepositorio.cadastrarProdutos({
        descricao,
        quantidade_estoque,
        valor,
        categoria_id,
        imagem: arquivo.url
      })
    )[0];

    if (!produto) {
      return res.status(400).json("O produto não foi cadastrado");
    }

    return res.status(201).json(produto);
  } catch (error) {
    //console.log(error);

    if (error.constraint == 'usuarios_email_key') {
      return res.status(400).json({ mensagem: 'Email já existe' });
    }
    return res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
};

module.exports = produtoCadastrar;