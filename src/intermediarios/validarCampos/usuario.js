const schemaUsuario = require('../../shema/schemaUsuario');

const usuario = (req, res, next) => {
  const { error } = schemaUsuario.validate(req.body);

  if (error) {
    return res.status(400).json({ mensagem: error.details[0].message });
  }
  return next();
}

module.exports = usuario;
