const express = require("express");
const rotas = express.Router();

const cadastroUsuarios = require("./controladores/cadastroUsuario");
const usuarioLogin = require("./controladores/usuarioLogin");
const perfilDetalhar = require("./controladores/perfilDetalhar");

const intermediarioEmail = require("./intermediarios/usuario");
const autenticarUsuario = require("./intermediarios/autenticarUsuario");

rotas.get('/', (req, res) => { res.send('Desafio M05') });
rotas.post("/usuario", intermediarioEmail, cadastroUsuarios);
rotas.post("/login", usuarioLogin);

//Intermediario ( Autenticador )
rotas.use(autenticarUsuario);

rotas.get("/usuario", perfilDetalhar);

module.exports = rotas;
