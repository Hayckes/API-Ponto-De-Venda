const express = require('express');
const rotas = express.Router();

//Objeto de controladores
const usuarioContolador = require('./controladores/usuario/usuarioControlador');
const produtoControlador = require('./controladores/produto/produtoControlador');
const clienteControlador = require('./controladores/cliente/clienteControlador')
//Imports Controladores
const listarCategorias = require('./controladores/listarCategorias');

//Objeto de intermediarios
const validarCamposInter = require('./intermediarios/validarCampos');
//Imports intermediarios
const autenticarUsuario = require('./intermediarios/autenticarUsuario');

//Rotas - Fase 1
rotas.get('/', (req, res) => { res.send('Los Coders') });

rotas.get('/categoria', listarCategorias);
rotas.post('/usuario', validarCamposInter.usuario, usuarioContolador.cadastrarUsuario);
rotas.post('/login', validarCamposInter.login, usuarioContolador.usuarioLogin);

rotas.use(autenticarUsuario);

rotas.get('/usuario', usuarioContolador.perfilDetalhar);
rotas.put('/usuario', validarCamposInter.usuario, usuarioContolador.atualizarUsuario);

//Rotas - Fase 2
//Rotas de Produtos
rotas.post('/produto', validarCamposInter.produto, produtoControlador.cadastrarProduto);
//Editar dados do produto
rotas.get('/produto', validarCamposInter.produtosPorCategoria, produtoControlador.produtosListar);
rotas.get('/produto/:id', produtoControlador.detalharProduto);
rotas.put('/produto/:id', validarCamposInter.produto, produtoControlador.editarProdutos);
rotas.delete('/produto/:id', produtoControlador.produtosExcluir);

//Rotas de Clientes
rotas.post('/cliente', validarCamposInter.cliente, clienteControlador.cadastrarCliente);
//Atualizar dados do cliente
rotas.put('/cliente', validarCamposInter.cliente, clienteControlador.atualizarCliente);
//Listar cliente
rotas.get('/cliente/:id', clienteControlador.detalharCliente);

module.exports = rotas;
