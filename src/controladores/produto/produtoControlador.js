const cadastrarProduto = require('./cadastrarProduto');
const detalharProduto = require('./detalharProduto');
const editarProdutos = require('./editarProduto');
const produtosExcluir = require('./produtosExcluir');
const produtosListar = require('./produtosListar');
const produtoCadastrar = require('./produtoCadastrarAtualizado')

module.exports = {
  produtoCadastrar,
  cadastrarProduto,
  detalharProduto,
  produtosExcluir,
  produtosListar,
  editarProdutos
};
