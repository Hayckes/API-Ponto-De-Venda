const validarCamposObrigatorios = require('../utils/validarCamposObrigatorios');

const validarCampos = async (req, res, next) => {
  const { nome, email, senha } = req.body;
  const verificarCampos = validarCamposObrigatorios({ nome, email, senha });

  if (verificarCampos.result) {
    return res.status(404).json({
      mensagem: `É necessario informar os seguintes campos: ${verificarCampos.missingFields}`,
    });
  }

  return next();
};

module.exports = validarCampos;
