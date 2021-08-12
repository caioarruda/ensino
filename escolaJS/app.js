const { textoDoTeclado, numeroDoTeclado } = require('./helpers/teclado')
const { escreverNome, escreverNaTela } = require('./helpers/tela')
const { calcularMedia } = require('./helpers/calculos')

const main = async () => {
  const pathAlunos = 'bd/alunos.json'
  const alunosFile = fs.existsSync(pathAlunos)
    ? fs.readFileSync(pathAlunos)
    : '[]'
  const alunoBd = JSON.parse(alunosFile)
  let fim = ''
  let avaliacoes = []
  let alunos = alunoBd ? alunoBd : []
  const baseMedia = 5
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
      mediaAluno,
      avaliacoes,
      aprovacao: mediaAluno >= baseMedia ? 'aprovado' : 'reprovado'
    })
    fim = await textoDoTeclado('Deseja continuar? [S/N] ')
  } while (fim.toUpperCase() != 'N')
  let seGrava = await textoDoTeclado('Deseja Gravar os dados? [S/N] ')
  if (seGrava.toUpperCase() != 'N') {
    fs.writeFileSync(pathAlunos, JSON.stringify(alunos))
    escreverNaTela('Dados salvos com sucesso')
  }
  process.exit()
}
main()
