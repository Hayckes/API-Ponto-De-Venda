const knex = require('../../config/db/conexao');

const cadastrarCliente = (cliente) => {
  const {
    nome, email, cpf, cep, rua, numero, bairro, cidade, estado
  } = cliente
  return knex('clientes').insert({
    nome, email, cpf, cep, rua, numero, bairro, cidade, estado
  }).returning('*');
};

module.exports = cadastrarCliente;
