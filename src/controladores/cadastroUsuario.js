const knex = require('../config/db/conexao');
const bcrypt = require("bcrypt")

const cadastroUsuarios = async (req, res) => {
    const { nome, email, senha } = req.body;

    const senhaCriptografada = await bcrypt.hash(senha, 10);
    const cadastro = await knex('usuarios').insert({ nome, email, senha: senhaCriptografada });
    return res.status(201).json();

}

module.exports = cadastroUsuarios;