const knex = require('../../config/db/conexao');

const listarCategorias = () => {
  return knex.select().from('categorias');
};

module.exports = listarCategorias;
