const { textoDoTeclado, numeroDoTeclado } = require('./helpers/teclado')

const escreverNome = (nomePessoa) => {
  console.log('Olá ' + nomePessoa)
}

const main = async () => {
  const nome = await textoDoTeclado('nome: ')
  escreverNome(nome)
}

main()
