const express = require('express');
const rotas = express.Router();

const usuarioLogin = require('./controladores/usuarioLogin');
const perfilDetalhar = require("./controladores/perfilDetalhar");
const intermediarioEmail = require("./intermediarios/usuario");
const cadastroUsuarios = require("./controladores/cadastroUsuario");

rotas.post('/login', usuarioLogin);

rotas.post("/usuario", intermediarioEmail, cadastroUsuarios)
//Detalhar Perfil Usuario
rotas.get("/usuario/:id", perfilDetalhar);

module.exports = rotas;
