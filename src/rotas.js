const express = require('express');
const rotas = express.Router();

//Objeto de controladores
const usuarioContolador = require('./controladores/usuario/usuarioControlador');
const produtoControlador = require('./controladores/produto/produtoControlador');
//Imports Controladores
const listarCategorias = require('./controladores/listarCategorias');
const detalharCliente = require('./controladores/detalharCliente');
const cadastrarCliente = require('./controladores/cadastrarCliente');

//Objeto de intermediarios
const validarCamposInter = require('./intermediarios/validarCampos/validarCampos');
//Imports intermediarios
const autenticarUsuario = require('./intermediarios/autenticarUsuario');
const validarCampos = require('./intermediarios/validarCampos');
const validarCamposCliente = require('./intermediarios/validarCamposCadastroCliente');

//Rotas - Fase 1
rotas.get('/', (req, res) => { res.send('Los Coders')});

rotas.get('/categoria', listarCategorias);
rotas.post('/usuario', usuarioContolador.cadastrarUsuario);
rotas.post('/login', validarCamposInter.login, usuarioContolador.usuarioLogin);

rotas.use(autenticarUsuario);

rotas.get('/usuario', usuarioContolador.perfilDetalhar);
rotas.put('/usuario', validarCampos, usuarioContolador.atualizarUsuario);

//Rotas - Fase 2
//Rotas de Produtos
rotas.post('/produto', validarCamposInter.produto, produtoControlador.cadastrarProduto);
//Editar dados do produto
rotas.get('/produto', validarCamposInter.produtosPorCategoria, produtoControlador.produtosListar);
rotas.get('/produto/:id', produtoControlador.detalharProduto);
rotas.delete('/produto/:id', validarCamposInter.excluirProdutoPorId, produtoControlador.produtosExcluir);

//Rotas de Clientes
rotas.post('/cliente', validarCamposCliente, cadastrarCliente);
//Editar dados do cliente
//Listar cliente
rotas.get('/cliente/:id', detalharCliente);

module.exports = rotas;
