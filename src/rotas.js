const express = require('express');
const multer = require('./utils/multer')
const rotas = express.Router();

const usuarioContolador = require('./controladores/usuario/usuarioControlador');
const produtoControlador = require('./controladores/produto/produtoControlador');
const clienteControlador = require('./controladores/cliente/clienteControlador')
const pedidoControlador = require('./controladores/pedido/pedidoControlador')
const listarCategorias = require('./controladores/listarCategorias');

const validarCamposInter = require('./intermediarios/validarCampos');
const autenticarUsuario = require('./intermediarios/autenticarUsuario');

rotas.get('/', (req, res) => { res.send('Los Coders') });

rotas.get('/categoria', listarCategorias);
rotas.post('/usuario', validarCamposInter.usuario, usuarioContolador.cadastrarUsuario);
rotas.post('/login', validarCamposInter.login, usuarioContolador.usuarioLogin);

rotas.use(autenticarUsuario);

rotas.get('/usuario', usuarioContolador.perfilDetalhar);
rotas.put('/usuario', validarCamposInter.usuario, usuarioContolador.atualizarUsuario);

rotas.post('/produto', multer.single('imagem'), validarCamposInter.produto, produtoControlador.produtoCadastrar);
rotas.get('/produto', validarCamposInter.produtosPorCategoria, produtoControlador.produtosListar);
rotas.get('/produto/:id', produtoControlador.detalharProduto);
rotas.put('/produto/:id', validarCamposInter.produto, produtoControlador.editarProdutos);
rotas.delete('/produto/:id', produtoControlador.produtosExcluir);

rotas.post('/cliente', validarCamposInter.cliente, clienteControlador.cadastrarCliente);
rotas.put('/cliente/:id', validarCamposInter.cliente, clienteControlador.atualizarCliente);
rotas.get('/cliente/:id', clienteControlador.detalharCliente);

rotas.post('/pedido', validarCamposInter.pedido, pedidoControlador.cadastrarPedido);
rotas.get('/pedido', pedidoControlador.pedidosListar)

module.exports = rotas;
