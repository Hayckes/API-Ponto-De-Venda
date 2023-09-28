const express = require("express");

const perfilDetalhar = require("./controladores/perfilDetalhar");

const rotas = express();

//Detalhar Perfil Usuario
rotas.get("/usuario/:id", perfilDetalhar);

module.exports = rotas;
