const knex = require('../config/db/conexao');

const encontrarUsuarioPorId = (id) => {
  return knex('usuarios').select('*').where( {id} );
};

module.exports = encontrarUsuarioPorId;
