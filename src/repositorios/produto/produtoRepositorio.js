const atualizarProdutos = require('./atualizarProdutos');
const cadastrarProduto = require('./cadastrarProduto');
const detalharProduto = require('./detalharProduto');
const editarProduto = require('./editarProduto');
const encontrarProdutoPorId = require('./encontrarProdutoPorId');
const excluirProdutos = require('./excluirProdutos');
const listarProdutos = require('./listarProdutos');

module.exports = {
  cadastrarProduto,
  detalharProduto,
  excluirProdutos,
  listarProdutos,
  editarProduto,
  encontrarProdutoPorId,
  atualizarProdutos
};
