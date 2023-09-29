const bcrypt = require('bcrypt');

const compararSenhas = (senha, senhaCriptografada) => {
  return bcrypt.compare(senha, senhaCriptografada);
};

const criptograrSenha = (senha) => {
  return bcrypt.hash(senha, 10);
};

module.exports = {
  compararSenhas,
  criptograrSenha,
};
