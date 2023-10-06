const knex = require('../config/db/conexao');


const detalharProdutoRepositorio = (id) => {
    return knex.select().from('produtos').where({ id });
}

module.exports = detalharProdutoRepositorio;