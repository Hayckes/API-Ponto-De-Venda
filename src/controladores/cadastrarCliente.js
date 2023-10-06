const cadastrarClienteRepositorio = require("../repositorios/cadastrarClienteRepositorio");


const cadastrarCliente = async (req, res) => {
    const { nome, email, cpf } = req.body;

    try {

        const cliente = (await cadastrarClienteRepositorio(nome, email, cpf))[0];

        return res.status(201).json(cliente);

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno no servidor.' });
    }
}

module.exports = cadastrarCliente;