const Joi = require('joi');

const schemaUsuario = Joi.object({
  nome: Joi.string().required().messages({
    'any.required': 'Nome é um campo obrigatório',
    'string.empty': 'Nome deve ser preenchido',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email deve ser valido',
    'any.required': 'Email é um campo obrigatório',
    'string.empty': 'Email deve ser preenchido',
  }),
  senha: Joi.string().min(4).required().messages({
    'string.min': 'A senha deve ser no mínimo 4 caracter',
    'any.required': 'Senha é um campo obrigatório',
  }),
});

module.exports = schemaUsuario;
