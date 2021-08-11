const escreverNome = (nome, idade) => {
  console.log('Cadastrando ' + nome + ', sua idade é ' + idade)
}
const escreverNaTela = (texto) => {
  console.log(texto)
}

module.exports = { escreverNome, escreverNaTela }
