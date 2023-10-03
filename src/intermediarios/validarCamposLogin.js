const validarCamposObrigatorios = require('../utils/validarCamposObrigatorios');

const validarCamposLogin = async (req, res, next) => {
  const { email, senha } = req.body;
  const verificarCampos = validarCamposObrigatorios({ email, senha });

  if (verificarCampos.result) {
    return res.status(404).json({
      mensagem: `É necessario informar os seguintes campos: ${verificarCampos.missingFields}`,
    });
  }

  return next();
};

module.exports = validarCamposLogin;
