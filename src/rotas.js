const express = require('express');
const rotas = express.Router();

const cadastroUsuarios = require('./controladores/cadastroUsuario');
const usuarioLogin = require('./controladores/usuarioLogin');
const perfilDetalhar = require('./controladores/perfilDetalhar');
const listarCategorias = require('./controladores/listarCategorias');

const autenticarUsuario = require('./intermediarios/autenticarUsuario');
const atualilzarUsuario = require('./controladores/atualizarUsuario');
const validarCampos = require('./intermediarios/validarCampos');
const validarCamposLogin = require('./intermediarios/validarCamposLogin');

rotas.get('/', (req, res) => { res.send('Los Coders') });

rotas.get('/categoria', listarCategorias);
rotas.post('/usuario', validarCampos, cadastroUsuarios);
rotas.post('/login', validarCamposLogin, usuarioLogin);

rotas.use(autenticarUsuario);

rotas.get('/usuario', perfilDetalhar);
rotas.put('/usuario', validarCampos, atualilzarUsuario);

module.exports = rotas;
