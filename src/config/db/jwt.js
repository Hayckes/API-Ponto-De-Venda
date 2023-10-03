const jwt = require('jsonwebtoken');
require('dotenv').config();

function verificarJwt(token) {
  try {
    const secret_key = process.env.JWT_HASH;
    const decoded = jwt.verify(token, secret_key);
    return decoded;
  } catch (error) {
    return null;
  }
}

module.exports = {
  verificarJwt,
};
