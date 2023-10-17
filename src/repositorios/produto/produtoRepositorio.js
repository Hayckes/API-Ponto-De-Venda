const atualizarProdutos = require('./atualizarProdutos');
const detalharProduto = require('./detalharProduto');
const editarProduto = require('./editarProduto');
const encontrarProdutoPorId = require('./encontrarProdutoPorId');
const excluirProdutos = require('./excluirProdutos');
const listarProdutos = require('./listarProdutos');

const encontrarPedidosPorId = require('./encontrarPedidosPorId');
const cadastrarProdutos = require('./cadastrarProdutoAtualizado');


module.exports = {
  cadastrarProdutos,
  detalharProduto,
  excluirProdutos,
  listarProdutos,
  editarProduto,
  encontrarProdutoPorId,
  encontrarPedidosPorId,
  atualizarProdutos
};
