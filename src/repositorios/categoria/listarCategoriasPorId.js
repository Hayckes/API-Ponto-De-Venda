const knex = require('../../config/db/conexao');

const listarCategoriasPorId = (id) => {
  return knex.select().from('categorias').where({ id });
};

module.exports = listarCategoriasPorId;
