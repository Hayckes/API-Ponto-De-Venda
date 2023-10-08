const knex = require('../../config/db/conexao');

const atualizarCliente = (cliente) => {
  const { id,
    nome, email, cpf, cep, rua, numero, bairro, cidade, estado
  } = cliente
  return knex('clientes').update({
    nome, email, cpf, cep, rua, numero, bairro, cidade, estado
  }).where({ id }).returning('*');
};

module.exports = atualizarCliente;
