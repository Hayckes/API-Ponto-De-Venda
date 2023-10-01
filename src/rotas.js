const express = require("express");
const rotas = express.Router();

const cadastroUsuarios = require("./controladores/cadastroUsuario");
const usuarioLogin = require("./controladores/usuarioLogin");
const perfilDetalhar = require("./controladores/perfilDetalhar");

const intermediarioEmail = require("./intermediarios/usuario");
const autenticarUsuario = require("./intermediarios/autenticarUsuario");
const { Autenticacao } = require("./intermediarios/autenticacao");
const atualilzarUsuario = require("./controladores/atualizarUsuario");

rotas.get('/', (req, res) => { res.send('Desafio M05') });
rotas.post("/usuario", intermediarioEmail, cadastroUsuarios);
rotas.post("/login", usuarioLogin);

//atualizar dados
rotas.use(Autenticacao)
rotas.put("/usuario",atualilzarUsuario)

//Intermediario ( Autenticador )
rotas.use(autenticarUsuario);
rotas.get("/usuario", perfilDetalhar);

module.exports = rotas;
