const { JWT_HASH } = process.env;

const jwt = require('jsonwebtoken');
require('dotenv').config();

function verificarJwt(token) {
  try {
    return jwt.verify(token, JWT_HASH);
  } catch (error) {
    return null;
  }
}

function gerarToken(id) {
  const token = jwt.sign({ id }, JWT_HASH, {
    expiresIn: '1h',
  });
  return token;
}

module.exports = {
  verificarJwt,
  gerarToken,
};
