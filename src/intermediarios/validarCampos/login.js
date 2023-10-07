const schemaLogin = require('../../shema/schemaLogin');

const login = (req, res, next) => {
  const { error } = schemaLogin.validate(req.body);

  if (error) {
    return res.status(400).json({ mensagem: error.details[0].message });
  }

  return next();
};

module.exports = login;
