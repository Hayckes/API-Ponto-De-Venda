const knex = require("../../config/db/conexao");

const pedidosExiste = (ids) => {
  return knex('produtos').whereIn('id', ids);
}

module.exports = pedidosExiste
