const { textoDoTeclado, numeroDoTeclado } = require('./helpers')

// const main = async () => {
//   const listaDestinos = [
//     {
//       nome: 'São Paulo',
//       codigo: 11
//     },
//     {
//       nome: 'Salvador',
//       codigo: 81
//     },
//     {
//       nome: 'Recife',
//       codigo: 83
//     }
//   ]
//   console.log('Escolha um destino: ')

//   let opcao = 1
//   while (opcao != 0) {
//     for (let contador = 0; contador < listaDestinos.length; contador++) {
//       const nomeDestino = listaDestinos[contador].nome
//       const codigoDestino = listaDestinos[contador].codigo
//       console.log('(' + codigoDestino + ') ' + nomeDestino)
//     }
//     opcao = await numeroDoTeclado('\r\nDigite:')
//     for (let contador = 0; contador < listaDestinos.length; contador++) {
//       const nomeDestino = listaDestinos[contador].nome
//       const codigoDestino = listaDestinos[contador].codigo
//       if (codigoDestino.toString() === opcao.toString()) {
//         console.log('Destino escolhido: ' + nomeDestino + '\r\n')
//         listaDestinos.splice(contador, 1)
//       }
//     }
//     console.log('Destinos Restantes:')
//   }
// }
// main()

// const listaLetras = ['a', 'b', 'c']
// const listaNumeros = [1, 2, 3]
// const listaDestinos = [
//   {
//     nome: 'São Paulo',
//     codigo: 11
//   },
//   {
//     nome: 'Salvador',
//     codigo: 81
//   },
//   {
//     nome: 'Recife',
//     codigo: 83
//   }
// ]

// for (let destino of lista) {
//   // melhor tipo de loop a ser utilizado == forEach
// }

// for (let i = 0; i < listaDestinos.length; i++) {
//   //loop a ser utlizado quando necessitar manipular o indice ou saber o indice
// }

// while (condicao == true) {
//   // loop a ser utilizado quando necessitar fazer um loop infinito
// }

//create mongodb connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/be-mean-instagram-mongodb')
mongoose.connection
  .on('error', () => {})
  .on('open', () => {
    console.log('Mongoose conectado com sucesso!')
  })

class Estoque {
  produtos = []
  addProduto(produto) {
    this.produtos.push(produto)
  }
  removeProduto(produto) {
    this.produtos.splice(this.produtos.indexOf(produto), 1)
  }
  getProdutos() {
    return this.produtos
  }
  updateProduto(produto) {
    this.produtos[this.produtos.indexOf(produto)] = produto
  }
  getProdutoByName(nome) {
    for (let produto of this.produtos) {
      if (produto.nome === nome) {
        return produto
      }
    }
  }
  WriteProdutoOnConsole() {
    for (let produto of this.produtos) {
      console.log(produto.nome + ' - ' + produto.valor)
    }
  }
  ifProdutoExiste(nome) {
    for (let produto of this.produtos) {
      if (produto.nome === nome) {
        return true
      }
    }
  }
}

class Clientes {
  clientes = []
  addCliente(cliente) {
    this.clientes.push(cliente)
  }
  removeCliente(cliente) {
    this.clientes.splice(this.clientes.indexOf(cliente), 1)
  }
  getClientes() {
    return this.clientes
  }
  updateCliente(cliente) {
    this.clientes[this.clientes.indexOf(cliente)] = cliente
  }
  WriteClientesOnConsole() {
    for (let cliente of this.clientes) {
      console.log(cliente.nome + ' - ' + cliente.telefone)
    }
  }
}

const estoque = new Estoque()
const clientes = new Clientes()
const main = async () => {
  let nomeProduto = ''
  let valorProduto = ''
  while (nomeProduto != 'sair') {
    nomeProduto = await textoDoTeclado('Digite o nome do produto: ')
    if (nomeProduto == 'sair') {
      break
    }
    if (!estoque.ifProdutoExiste(nomeProduto)) {
      valorProduto = await textoDoTeclado('Digite o valor do produto: ')
      estoque.addProduto({ nome: nomeProduto, valor: valorProduto })
    }
  }
  estoque.WriteProdutoOnConsole()
  clientes.addCliente({ nome: 'João', telefone: '99999' })
}
main()
