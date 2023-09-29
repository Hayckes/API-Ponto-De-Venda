const knex = require('../config/db/conexao');

const encontrarUsuarioPorEmail = (email) => {
  return knex('usuarios').select('*').where({ email });
};

module.exports = encontrarUsuarioPorEmail;
