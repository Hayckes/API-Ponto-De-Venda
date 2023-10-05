const Joi = require('joi');

const schemaLogin = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Email deve ser valido',
    'any.required': 'Email é um campo obrigatório',
    'string.empty': 'Email deve ser valido',
  }),
  senha: Joi.string().min(4).required().messages({
    'string.min': 'A senha deve ser no mínimo 4 caracter',
    'any.required': 'Senha é um campo obrigatório',
  }),
});

module.exports = schemaLogin;
