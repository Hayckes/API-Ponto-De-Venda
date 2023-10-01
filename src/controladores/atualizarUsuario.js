const encontrarUsuarioPorId = require("../repositorios/encontrarUsuarioPorId");
const validarCamposObrigatorios = require("../utils/validarCamposObrigatorios");
const { criptograrSenha } = require("../utils/criptografarCompararSenha");
const atualizarUsuario = require("../repositorios/atualizarUsuario");

async function atualilzarUsuario(req, res) {
  try {
    const { nome, email, senha } = req.body;
    const id = req.usuario_id

    const verificarCampos = validarCamposObrigatorios({ nome, email, senha });

    if(verificarCampos.result){
      return res.status(404).json({ mensagem: `É necessario informar os seguintes campos: ${verificarCampos.missingFields}`})
    }

    const dadosUsuarioId = await encontrarUsuarioPorId(id)

    if (dadosUsuarioId[0].email === email) {
      return res.status(400).json({
        mensagem: "Email já existe",
      });
    }

    const senhaCriptografada = await criptograrSenha(senha);

    await atualizarUsuario({id, nome, email, senha: senhaCriptografada });

    return res.status(204).json();

  } catch (error) {
    return res.status(500).json({ mensagem: "Erro do servidor interno" });
  }
}

module.exports = atualilzarUsuario;
