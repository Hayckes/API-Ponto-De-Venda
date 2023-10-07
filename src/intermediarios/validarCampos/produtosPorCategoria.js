const schemaProdutosPorCategoria = require('../../shema/schemaProdutosPorCategoria');

const produtosPorCategoria = (req, res, next) => {
  const { categoria_id } = req.query;

  if (categoria_id == undefined) {
    return next();
  }

  const { error } = schemaProdutosPorCategoria.validate({ categoria_id });

  if (error) {
    return res.status(400).json({ mensagem: error.details[0].message });
  }

  return next();
};

module.exports = produtosPorCategoria;
