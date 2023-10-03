const knex = require('../config/db/conexao');

const listaCategorias = () => {
  return knex.select().from('categorias');
};

module.exports = listaCategorias;
