const express = require('express');
const rotas = express.Router();

const listarCategorias = require('./controladores/listarCategorias');

const autenticarUsuario = require('./intermediarios/autenticarUsuario');
// const cadastrarCliente = require('./controladores/cadastrarCliente');

const usuarioContolador = require('./controladores/usuario/usuarioControlador');
const produtoControlador = require('./controladores/produto/produtoControlador');
const validarCamposInter = require('./intermediarios/validarCampos/validarCampos');
const validarCampos = require('./intermediarios/validarCampos');

rotas.get('/', (req, res) => {
  res.send('Los Coders');
});

rotas.get('/categoria', listarCategorias);
rotas.post('/usuario', usuarioContolador.cadastrarUsuario);
rotas.post('/login', validarCamposInter.login, usuarioContolador.usuarioLogin);

rotas.use(autenticarUsuario);

rotas.get('/usuario', usuarioContolador.perfilDetalhar);
rotas.put('/usuario', validarCampos, usuarioContolador.atualizarUsuario);

rotas.post(
  '/produto',
  validarCamposInter.produto,
  produtoControlador.cadastrarProduto
);
rotas.delete(
  '/produto/:id',
  validarCamposInter.excluirProdutoPorId,
  produtoControlador.produtosExcluir
);
rotas.get(
  '/produto',
  validarCamposInter.produtosPorCategoria,
  produtoControlador.produtosListar
);
rotas.get('/produto/:id', produtoControlador.detalharProduto);
// rotas.post('/cliente', cadastrarCliente);

module.exports = rotas;
