const { textoDoTeclado, numeroDoTeclado } = require('./helpers/teclado')

const escreverNome = (nomePessoa) => {
  console.log('Olá ' + nomePessoa)
}

const main = async () => {
  const nome = await textoDoTeclado('nome: ')
  const idade = await numeroDoTeclado('idade: ')
  escreverNome(nome + ' com ' + idade + ' anos')
  // let media = (a * 2 + b * 2 + c) / 3
}

main()
