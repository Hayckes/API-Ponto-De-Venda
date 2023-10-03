const knex = require('../config/db/conexao');

const cadastrarUsuario = ({ nome, email, senha }) => {
  return knex('usuarios').insert({ nome, email, senha });
};

module.exports = cadastrarUsuario;
