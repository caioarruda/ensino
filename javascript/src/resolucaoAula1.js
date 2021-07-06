// let keyData = ''
// const { getKey } = require('./helpers.js')
// getKey(keyData)

// function sePassou(nota1, nota2, nota3, nota4) {
//   const soma = nota1 + nota2 + nota3 + nota4
//   const media = soma / 4
//   if (media >= 7) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log('Resultado: ', sePassou(1, 5, 6, 7) ? 'Aprovado' : 'Reprovado')
const nqtdAtual = 45
const nqtdMin = 25
const nqtdMax = 95

function estMedio(qtdMin, qtdMax) {
  if (qtdMax < qtdMin || qtdMax < 1 || qtdMin < 0) {
    return 'erro de parametros'
  }
  const qtdMedia = (qtdMin + qtdMax) / 2
  return qtdMedia
}

console.log(estMedio(nqtdMin, nqtdMax))

function sitEstoque(qtdAtual, qtdMin, qtdMax) {
  if (qtdMax < qtdMin || qtdMax < 1 || qtdMin < 0 || qtdAtual < 0) {
    return 'erro de parametros'
  }
  if (qtdAtual < qtdMin) {
    return 'baixo'
  }
  if (qtdAtual > qtdMax) {
    return 'estrapolado'
  }
  return 'ok'
}

console.log(sitEstoque(nqtdAtual, nqtdMin, nqtdMax))
