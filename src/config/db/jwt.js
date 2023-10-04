const { JWT_HASH } = process.env

const jwt = require('jsonwebtoken');
require('dotenv').config();

function verificarJwt(token) {
  try {
    const secret_key = JWT_HASH;
    const decoded = jwt.verify(token, secret_key);
    return decoded;
  } catch (error) {
    return null;
  }
}

function gerarToken(id) {
  const token = jwt.sign({ id }, JWT_HASH, {
    expiresIn: '15m',
  });
  return token
}


module.exports = {
  verificarJwt,
  gerarToken
};
