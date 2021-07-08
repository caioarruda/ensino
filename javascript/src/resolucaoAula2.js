/* Pré requisitos para iniciar o programa
const { textoDoTeclado, numeroDoTeclado } = require('./helpers')

const main = async() => {

}
main()
*/
const { textoDoTeclado, numeroDoTeclado } = require('./helpers')

const main = async () => {
  let nome = await textoDoTeclado('Digite seu nome:')
  let peso = await numeroDoTeclado('Digite seu peso:')
  let sexo = await textoDoTeclado(
    'Digite seu sexo (f)eminino ou (m)masculino):'
  )
  let altura = await numeroDoTeclado('Digite sua altura:')

  function getPesoIdeal() {
    if (sexo == 'm') {
      return 72.7 * altura - 58
    } else {
      return 62.1 * altura - 44.7
    }
  }

  console.log('-----------------')
  console.log('Função Peso Ideal')
  console.log('-----------------')

  //Escreve quanto tem de ganhar ou perder para o peso ideal

  console.log('Peso Ideal: ' + getPesoIdeal() + ' Kg')
  console.log('Peso Atual: ' + peso + ' Kg')
  console.log('Altura: ' + altura + ' metros')
  console.log('Nome: ' + nome)

  console.log('\r\n-----------------')
  console.log('Função Comissão')
  console.log('-----------------')

  let salariofixo = await numeroDoTeclado('Qual seu salário:')
  let totalvendas = await numeroDoTeclado('Valor vendido:')

  function getCalcularComissao() {
    const comissao = 0.03
    const bonificacao = 0.05
    const base =
      salariofixo +
      (totalvendas <= 1500 ? totalvendas * comissao : 1500 * comissao)
    const bonus = (totalvendas - 1500) * bonificacao
    console.log('Bonus: ' + (bonus > 0 ? bonus : 0))
    return base + (totalvendas > 1500 ? bonus : 0)
  }

  console.log('Valor Recebido: ' + getCalcularComissao())
}

main()
