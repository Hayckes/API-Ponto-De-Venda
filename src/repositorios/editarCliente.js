const knex = require('../config/db/conexao');

const editarClienteDB = ({ id, nome, email, cpf }) => {
  return knex('clientes').update({ nome, email, cpf }).where({ id });
};

module.exports = editarClienteDB;
