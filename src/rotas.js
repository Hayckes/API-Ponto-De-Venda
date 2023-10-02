const express = require('express');
const rotas = express.Router();

const cadastroUsuarios = require('./controladores/cadastroUsuario');
const usuarioLogin = require('./controladores/usuarioLogin');
const perfilDetalhar = require('./controladores/perfilDetalhar');
const listarCategorias = require('./controladores/listarCategorias');

const intermediarioEmail = require('./intermediarios/usuario');
const autenticarUsuario = require('./intermediarios/autenticarUsuario');
const atualilzarUsuario = require('./controladores/atualizarUsuario');
// const validarCampos = require('./intermediarios/validarCampos');

rotas.get('/', (req, res) => {
  res.send('Desafio M05');
});

// rotas.use(validarCampos);
rotas.post('/usuario', intermediarioEmail, cadastroUsuarios);
rotas.post('/login', usuarioLogin);

//Intermediario ( Autenticador )
rotas.use(autenticarUsuario);
rotas.get('/usuario', perfilDetalhar);
rotas.put('/usuario', atualilzarUsuario);
rotas.get('/listarCategorias', listarCategorias);

module.exports = rotas;
