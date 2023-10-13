const schemaPedido = require('../../shema/schemaPedido');

const pedido = (req, res, next) => {
  const { error } = schemaPedido.validate(req.body);

  if (error) {
    return res.status(400).json({ mensagem: error.details[0].message });
  }

  return next();
};

module.exports = pedido;
