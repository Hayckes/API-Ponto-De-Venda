const schemaExcluirProdutoPorId = require('../../shema/schemaExcluirProdutoPorId');

const validarCamposExcluirProdutoPorId = (req, res, next) => {
  const { id } = req.query;

  const { error } = schemaExcluirProdutoPorId.validate({ id });

  if (error) {
    return res.status(400).json({ mensagem: error.details[0].message });
  }

  return next();
};

module.exports = validarCamposExcluirProdutoPorId;
