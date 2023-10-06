const Joi = require('joi');

const schemaProdutosPorCategoria = Joi.object({
  categoria_id: Joi.number().integer().messages({
    'number.base': 'O ID da categoria deve ser um número',
    'number.integer': 'O ID da categoria deve ser um número inteiro',
  }),
});

module.exports = schemaProdutosPorCategoria;
