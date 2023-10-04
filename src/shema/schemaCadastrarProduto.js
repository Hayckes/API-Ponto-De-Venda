const Joi = require('joi');

const schemaProduto = Joi.object({
  descricao: Joi.string().required().messages({
    'string.base': 'A descrição deve ser texto',
    'any.required': 'Descrição é um campo obrigatório',
  }),
  quantidade_estoque: Joi.number().integer().min(0).required().messages({
    'number.base': 'A quantidade em estoque deve ser um número',
    'number.integer': 'A quantidade em estoque deve ser um número inteiro',
    'number.min': 'A quantidade em estoque deve ser no mínimo 0',
    'any.required': 'A quantidade em estoque é um campo obrigatório',
  }),
  valor: Joi.number().positive().required().messages({
    'number.base': 'O valor deve ser um número',
    'number.positive': 'O valor deve ser um número positivo',
    'any.required': 'O valor é um campo obrigatório',
  }),
  categoria_id: Joi.number().integer().required().messages({
    'number.base': 'O ID da categoria deve ser um número',
    'number.integer': 'O ID da categoria deve ser um número inteiro',
    'any.required': 'O ID da categoria é um campo obrigatório',
  }),
});

module.exports = schemaProduto;
