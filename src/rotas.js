const express = require('express');
const multer = require('./utils/multer')
const rotas = express.Router();

//Objeto de controladores
const usuarioContolador = require('./controladores/usuario/usuarioControlador');
const produtoControlador = require('./controladores/produto/produtoControlador');
const clienteControlador = require('./controladores/cliente/clienteControlador')
const pedidoControlador = require('./controladores/pedido/pedidoControlador')
//Imports Controladores
const listarCategorias = require('./controladores/listarCategorias');

//Objeto de intermediarios
const validarCamposInter = require('./intermediarios/validarCampos');
//Imports intermediarios
const autenticarUsuario = require('./intermediarios/autenticarUsuario');
const pedidosListar = require('./controladores/pedido/pedidosListar');

//Rotas - Fase 1
rotas.get('/', (req, res) => { res.send('Los Coders') });

rotas.get('/categoria', listarCategorias);
rotas.post('/usuario', validarCamposInter.usuario, usuarioContolador.cadastrarUsuario);
rotas.post('/login', validarCamposInter.login, usuarioContolador.usuarioLogin);

rotas.use(autenticarUsuario);

rotas.get('/usuario', usuarioContolador.perfilDetalhar);
rotas.put('/usuario', validarCamposInter.usuario, usuarioContolador.atualizarUsuario);

//Rotas - Fase 2
//Rotas de Produtos Atualizado (Envio de Imagem)
rotas.post('/produto',  multer.single('imagem'), validarCamposInter.produto, produtoControlador.produtoCadastrar);

//Editar dados do produto
rotas.get('/produto', validarCamposInter.produtosPorCategoria, produtoControlador.produtosListar);
rotas.get('/produto/:id', produtoControlador.detalharProduto);
rotas.put('/produto/:id', validarCamposInter.produto, produtoControlador.editarProdutos);
rotas.delete('/produto/:id', produtoControlador.produtosExcluir);

//Rotas de Clientes
rotas.post('/cliente', validarCamposInter.cliente, clienteControlador.cadastrarCliente);
//Atualizar dados do cliente
rotas.put('/cliente/:id', validarCamposInter.cliente, clienteControlador.atualizarCliente);
//Listar cliente
rotas.get('/cliente/:id', clienteControlador.detalharCliente);

// Pedido
rotas.post('/pedido', validarCamposInter.pedido, pedidoControlador.cadastrarPedido);
rotas.get('/pedido', pedidosListar)

module.exports = rotas;
