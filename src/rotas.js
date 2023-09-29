const express = require('express');
const usuarioLogin = require('./controladores/usuarioLogin');
const rotas = express.Router();

rotas.post('/login', usuarioLogin);

module.exports = rotas;
