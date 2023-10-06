const excluirProdutoPorId = require('./validarCamposExcluirProdutoPorId');
const login = require('./validarCamposLogin');
const produto = require('./validarCamposProduto');
const produtosPorCategoria = require('./validarCamposProdutosPorCategoria');

module.exports = {
  excluirProdutoPorId,
  login,
  produto,
  produtosPorCategoria,
};
