const knex = require('../config/db/conexao');

const cadastrarClienteRepositorio = (nome, email, cpf) => {
    return knex('clientes').insert({
        nome, email, cpf,
    }).returning('*');
};

module.exports = cadastrarClienteRepositorio;