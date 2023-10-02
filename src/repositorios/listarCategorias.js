const knex = require('../config/db/conexao');

const categorias = () => {
  return knex.select().from('categorias');
};

module.exports = {
  categorias,
};
