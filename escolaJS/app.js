const { textoDoTeclado, numeroDoTeclado } = require('./helpers/teclado')
const { escreverNome } = require('./helpers/tela')
const { calcularMedia } = require('./helpers/calculos')

const main = async () => {
  let fim = ''
  let avaliacoes = []
  let alunos = []
  do {
    const nome = await textoDoTeclado('Digite o nome do aluno: ')
    const idade = await numeroDoTeclado('Digite a idade do aluno: ')
    escreverNome(nome, idade)
    for (let i = 1; i < 3; i++) {
      const avaliacao = await numeroDoTeclado(
        'Digite a nota ' + i + ' do aluno: '
      )
      const peso = await numeroDoTeclado(
        'Digite o peso ' + i + ' da avaliação: '
      )
      const nota = {
        avaliacao,
        peso
      }
      avaliacoes.push(nota)
    }
    const mediaAluno = calcularMedia(avaliacoes)
    alunos.push({
      nome,
      idade,
      mediaAluno
    })
    fim = await textoDoTeclado('Deseja continuar? [S/N] ')
  } while (fim.toUpperCase() != 'N')
  console.log(alunos)
  process.exit()
}

main()
