const knex = require('../config/db/conexao');

const atualizarUsuario = ({ id, nome, email, senhaCriptografada }) => {
  return knex('usuarios')
    .update({ nome, email, senha: senhaCriptografada })
    .where({ id })
    .returning('*')
    .debug();
};

module.exports = atualizarUsuario;
