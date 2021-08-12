const fs = require('fs')

const escreverJSON = () => {
  const cachorros = [
    { nome: 'Rex', raca: 'Pitbull' },
    {
      nome: 'Dog',
      raca: 'Pastor Alemão'
    }
  ]

  const jsonContent = JSON.stringify(cachorros)
  return jsonContent
}

const escreverArquivo = (caminho) => {
  const conteudo = escreverJSON()
  fs.writeFileSync(caminho, conteudo)

  const arquivo = fs.readFileSync(caminho, 'utf8')

  const dogs = JSON.parse(arquivo)
  console.log(dogs[0])
}

escreverArquivo('bd/dogs.json')
