const encontrarUsuarioPorEmail = require('../repositorios/encontrarUsuarioPorEmail');

const verificarEmail = async (req, res, next) => {
  const { email } = req.body;

  const emailExistente = (await encontrarUsuarioPorEmail(email))[0];
  if (emailExistente) {
    return res.status(400).json({ mensagem: 'Este email já existe!' });
  }

  return next();
};

module.exports = verificarEmail;
