const knex = require("../config/db/conexao");

const detalharPerfil = (usuario_id) => {
  const perfilUsuario = knex("usuarios")
    .select("*")
    .where({ id: usuario_id });

  return perfilUsuario;
};

module.exports = detalharPerfil;
