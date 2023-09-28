const knex = require('../config/db/conexao');

const intermediarioEmail = async (req, res, next) => {
    const { email } = req.body;

    const emailExistente = await knex('usuarios').where('email', email).select('email').then((rows) => {
        if (rows.length > 0) {
            return res.status(200).json({ mensagem: "Este email já existe!" })
        }
        return next();
    });

}

module.exports = intermediarioEmail;