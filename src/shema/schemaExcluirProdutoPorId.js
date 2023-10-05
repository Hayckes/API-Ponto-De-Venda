const Joi = require('joi');

const schemaExcluirProdutoPorId = Joi.object({
  id: Joi.number().integer().messages({
    'number.base': 'O ID da categoria deve ser um número',
    'number.integer': 'O ID da categoria deve ser um número inteiro',
  }),
});

module.exports = schemaExcluirProdutoPorId;
