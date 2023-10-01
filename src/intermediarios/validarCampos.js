const Joi = require("joi")

const validarCampos = async(req, res, next) => {
  try {
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
          'any.required': 'Campo email é obrigatorio'
        }),
        senha: Joi.string().required().messages({
          'any.required': 'Campo senha é obrigatorio'
        })
    })

    await schema.validateAsync(req.body)

    return next()
  } catch (error) {
    return res.status(400).json({message: error.message})
  }

}

module.exports = validarCampos
