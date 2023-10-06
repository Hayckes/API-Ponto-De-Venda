const schemaProduto = require('../shema/schemaCadastrarProduto');

const validarCamposCliente = (req, res, next) => {
  const { error } = schemaProduto.validate(req.body);

  if (error) {
    return res.status(400).json({ mensagem: error.details[0].message });
  }

  return next();
};

module.exports = validarCamposCliente;
