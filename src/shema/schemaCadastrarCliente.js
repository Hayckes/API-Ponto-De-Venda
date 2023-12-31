const Joi = require('joi');

const schemaCliente = Joi.object({
  nome: Joi.string().required().messages({
    'any.required': 'Nome é um campo obrigatório',
    'string.empty': 'Nome deve ser valido',
  }),
  email: Joi.string().email().required().messages({
    'string.empty': 'Campo Email deve ser preenchido',
    'any.required': 'Email é um campo obrigatório',
    'string.email': 'Email dever ser valido.',
  }),
  cpf: Joi.string().min(11).max(11).required().messages({
    'string.base': 'CPF deve ser valido.',
    'any.required': 'CPF é um campo obrigatório',
    'string.min': 'CPF deve ser no mínimo 11 caracter',
    'string.max': 'CPF deve ser no máximo 11 caracter',
    'string.empty': 'Campo CPF deve ser preenchido.',
  }),
  cep: Joi.string().allow(null, ''),
  rua: Joi.string().allow(null, ''),
  numero: Joi.number().allow(null, 0).messages({
    'number.base': 'O campo número precisar ser número valido!'
  }),
  bairro: Joi.string().allow(null, ''),
  cidade: Joi.string().allow(null, ''),
  estado: Joi.string().allow(null, '')
});

module.exports = schemaCliente;
