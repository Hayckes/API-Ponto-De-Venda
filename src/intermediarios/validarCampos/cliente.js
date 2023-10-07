const schemaCliente = require('../../shema/schemaCadastrarCliente');

const cliente = (req, res, next) => {
  const { error } = schemaCliente.validate(req.body);

  if (error) {
    return res.status(400).json({ mensagem: error.details[0].message });
  }
  return next();
}

module.exports = cliente;
