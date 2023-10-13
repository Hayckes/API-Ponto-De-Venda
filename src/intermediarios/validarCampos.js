const cliente = require('./validarCampos/cliente');
const login = require('./validarCampos/login');
const pedido = require('./validarCampos/pedido');
const produto = require('./validarCampos/produto');
const produtosPorCategoria = require('./validarCampos/produtosPorCategoria');
const usuario = require('./validarCampos/usuario');

module.exports = {
  login,
  produto,
  produtosPorCategoria,
  cliente,
  usuario,
  pedido
};
