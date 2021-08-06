const calcularMedia = (avaliacoes) => {
  let media = 0
  for (let avaliacao of avaliacoes) {
    media += avaliacao.avaliacao * avaliacao.peso
  }
  return media / avaliacoes.length
}

module.exports = { calcularMedia }
