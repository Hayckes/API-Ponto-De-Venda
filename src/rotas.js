const express = require('express');
const rotas = express.Router();

const cadastroUsuarios = require('./controladores/cadastroUsuario');
const usuarioLogin = require('./controladores/usuarioLogin');
const perfilDetalhar = require('./controladores/perfilDetalhar');
const listarCategorias = require('./controladores/listarCategorias');

// const intermediarioEmail = require('./intermediarios/usuario');
const autenticarUsuario = require('./intermediarios/autenticarUsuario');
const atualilzarUsuario = require('./controladores/atualizarUsuario');
const validarCampos = require('./intermediarios/validarCampos');
const validarCamposLogin = require('./intermediarios/validarCamposLogin');
// const verificarEmail = require('./intermediarios/verificarEmail');

rotas.get('/', (req, res) => {
  res.send('Desafio M05');
});

rotas.post('/usuario', validarCampos, cadastroUsuarios);
rotas.post('/login', validarCamposLogin, usuarioLogin);

//Intermediario ( Autenticador )
rotas.use(autenticarUsuario);
rotas.get('/usuario', perfilDetalhar);
rotas.get('/categoria', listarCategorias);
rotas.put('/usuario', validarCampos, atualilzarUsuario);

module.exports = rotas;
