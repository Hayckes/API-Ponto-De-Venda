const express = require("express");

const perfilDetalhar = require("./controladores/perfilDetalhar");
const intermediarioEmail = require("./intermediarios/usuario");
const cadastroUsuarios = require("./controladores/cadastroUsuario");

const rotas = express();

rotas.post("/usuario", intermediarioEmail, cadastroUsuarios)
//Detalhar Perfil Usuario
rotas.get("/usuario/:id", perfilDetalhar);

module.exports = rotas;
