const transportador = require('../../config/nodemailer')
const clienteRepositorio = require('../../repositorios/cliente/clienteRepositorio')
const pedidoRepositorio = require('../../repositorios/pedido/pedidoRepositorio')
const inserirPedidoProdutos = require('../../repositorios/pedidoProdutos/inserirPedidoProduto')
const produtoRepositorio = require('../../repositorios/produto/produtoRepositorio')

const cadastrarPedido = async (req, res) => {
  const { cliente_id, observacao, pedido_produtos } = req.body

  try {
    // Verificar se o cliente exitente
    const clienteExiste = (await verificarCliente(cliente_id))[0];
    if (!clienteExiste) {
      return res.status(404).json({ mensagem: "Cliente não existe" })
    }

    // Verificar se os produtos existem
    const produtoExiste = await verificarProdutos(pedido_produtos)
    if (produtoExiste.length != pedido_produtos.length) {
      return res.status(400).json({ mensagem: "Produto não existe" })
    }

    // Verificar quantidade em estoque
    for (const pedido of pedido_produtos) {
      const produtoEncontrado = produtoExiste.find(p => p.id == pedido.produto_id);

      if (!(produtoEncontrado.quantidade_estoque >= pedido.quantidade_produto)) {
        return res.status(404).json({ mensagem: "Quantidade em estoque é insuficiente" })
      }
    }

    // Criar Pedido
    const valor_total = pedido_produtos.map(pedido => {
      const produtoEncontrado = produtoExiste.find(p => p.id == pedido.produto_id);

      return produtoEncontrado.valor * pedido.quantidade_produto;
    });

    const pedido_criado = (await pedidoRepositorio.cadastrarPedido({
      cliente_id: cliente_id,
      observacao: observacao || null,
      valor_total: valor_total.reduce((total, valor) => total + valor, 0)
    }))[0]


    // Criando o pedido_produto
    const pedido_produto = pedido_produtos.map(pedido => {
      const produtoEncontrado = produtoExiste.find(p => p.id == pedido.produto_id);

      if (produtoEncontrado) {
        const novo_produto = {
          pedido_id: pedido_criado.id,
          produto_id: pedido.produto_id,
          quantidade_produto: pedido.quantidade_produto,
          valor_produto: produtoEncontrado.valor
        };

        return novo_produto;
      }
    })
    await inserirPedidoProdutos(pedido_produto)

    // Atualizar quantidade produtos no banco
    await atualizarProdutos(pedido_produtos, produtoExiste)

    // Envia e-mail de confirmação para o cliente
    await transportador.sendMail({
      from: 'Los Coders <los.coders@zohomail.com>',
      to: `${clienteExiste.nome} <${clienteExiste.email}>`,
      subject: 'Los Coders - PDV',
      html: `<p>Pedido de número #${pedido_criado.id} aceito com sucesso!</p>`,
    })

    return res.status(201).json({ mensagem: `Pedido #${pedido_criado.id} efetuado com sucesso!` })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ mensagem: "Erro interno no servidor!" })
  }
}
const verificarCliente = (cliente_id) => {
  return clienteRepositorio.encontrarClientePorId(cliente_id);
}

const verificarProdutos = (pedido_produtos) => {
  return pedidoRepositorio.pedidosExiste(pedido_produtos.map(p => {
    return p.produto_id
  }))
}

const atualizarProdutos = async (pedido_produtos, produtoExiste) => {

  const atulizarProdutos = pedido_produtos.map(p => {
    return produtoExiste.find(pt => {
      if (pt.id == p.produto_id) {
        pt.quantidade_estoque -= p.quantidade_produto
        return pt
      }
    })
  })

  for (const produto of atulizarProdutos) {
    await produtoRepositorio.atualizarProdutos(produto);
  }
}

module.exports = cadastrarPedido
