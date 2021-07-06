let peso = 55
let sexo = 'f'
let altura = 2
let nome = 'Marcia'

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
console.log('Peso Atual:' + peso + ' Kg')
console.log('Altura: ' + altura + ' metros')
console.log('Nome: ' + nome)

console.log('\r\n-----------------')
console.log('Função Comissão')
console.log('-----------------')

let salariofixo = 1300
let totalvendas = 1000

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
