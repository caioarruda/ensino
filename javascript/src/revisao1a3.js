const { textoDoTeclado, numeroDoTeclado } = require('./helpers')

const main = async () => {
  const listaDestinos = [
    {
      nome: 'São Paulo',
      codigo: 11
    },
    {
      nome: 'Salvador',
      codigo: 81
    },
    {
      nome: 'Recife',
      codigo: 83
    }
  ]
  console.log('Escolha um destino: ')

  let opcao = 1
  while (opcao != 0) {
    for (let contador = 0; contador < listaDestinos.length; contador++) {
      const nomeDestino = listaDestinos[contador].nome
      const codigoDestino = listaDestinos[contador].codigo
      console.log('(' + codigoDestino + ') ' + nomeDestino)
    }
    opcao = await numeroDoTeclado('\r\nDigite:')
    for (let contador = 0; contador < listaDestinos.length; contador++) {
      const nomeDestino = listaDestinos[contador].nome
      const codigoDestino = listaDestinos[contador].codigo
      if (codigoDestino.toString() === opcao.toString()) {
        console.log('Destino escolhido: ' + nomeDestino + '\r\n')
        listaDestinos.splice(contador, 1)
      }
    }
    console.log('Destinos Restantes:')
  }
}
main()

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

main()
