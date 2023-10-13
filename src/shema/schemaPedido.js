const Joi = require("joi");

const schemaPedido = Joi.object({
  cliente_id: Joi.number().integer().required().messages({
    'number.base': 'O ID da cliente deve ser um número',
    'number.integer': 'O ID da cliente deve ser um número inteiro',
  }),
  pedido_produtos: Joi.array().items(
    Joi.object({
      produto_id: Joi.number().required().messages({
        'any.required': 'O ID do produto é obrigatório.',
        'number.base': 'O ID do produto deve ser um número.',
      }),
      quantidade_produto: Joi.number().integer().min(1).required().messages({
        'any.required': 'A quantidade é obrigatória.',
        'number.base': 'A quantidade deve ser um número.',
        'number.integer': 'A quantidade deve ser um número inteiro.',
        'number.min': 'A quantidade deve ser no mínimo 1.',
      })
    })
  ).min(1).required().messages({
    'any.required': 'O pedido produtos é obrigatório.',
    'array.base': 'O pedido produtos deve ser uma array.',
    'array.min': 'O pedido produtos deve conter pelo menos um item.',
  })
});

module.exports = schemaPedido
