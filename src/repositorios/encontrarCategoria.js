const knex = require('../config/db/conexao');

const encontrarCategoria = (categoria_id) => {
  return knex('categorias').select('*').where({ id: categoria_id });
};

module.exports = encontrarCategoria;
