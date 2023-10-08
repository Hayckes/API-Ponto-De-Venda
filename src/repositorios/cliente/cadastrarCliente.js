const knex = require('../../config/db/conexao');

const cadastrarClienteRepositorio = (
    nome, email, cpf, cep, rua, numero, bairro, cidade, estado) => {
    return knex('clientes').insert({
        nome, email, cpf, cep, rua, numero, bairro, cidade, estado
    }).returning('*');
};

module.exports = cadastrarClienteRepositorio;
