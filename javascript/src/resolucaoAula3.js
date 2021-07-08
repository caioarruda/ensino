/* Pré requisitos para iniciar o programa
const { textoDoTeclado, numeroDoTeclado } = require('./helpers')

const main = async() => {

}
main()
*/

const { textoDoTeclado, numeroDoTeclado } = require('./helpers')
//Faça um controle de acesso com confirmação do nome.
const main = async () => {
  async function biblioteca(funcionario) {
    let livro1 = await textoDoTeclado('Digite o nome do livro')
    let livro2 = await textoDoTeclado('Digite o nome do livro')
    let livro3 = await textoDoTeclado('Digite o nome do livro')
    console.log('Lista de livros: ')
    console.log(livro1)
    console.log(livro2)
    console.log(livro3)

    let aluno = await textoDoTeclado('Digite nome do aluno')
    let nomeLivro = await textoDoTeclado('Digite nome do Livro para alugar')
    if (nomeLivro == livro1 || nomeLivro == livro2 || nomeLivro == livro3) {
      console.log('Livro ' + nomeLivro + ' alugado para ' + aluno)
      console.log('Responsavel: ' + funcionario)
    } else {
      console.log('Não encontrado')
      console.log('Responsavel: ' + funcionario)
    }
  }
  async function testeAcesso() {
    let nome = await textoDoTeclado('Digite seu nome:')
    console.log('Seu nome é ' + nome + ' ?')
    let confirmar = await numeroDoTeclado('(1) sim ou (2) não?')
    if (confirmar == 1) {
      console.log('Acesso Permitido ' + nome)
      biblioteca(nome)
    } else {
      console.log('Acesso negado!')
    }
  }
  testeAcesso()
}
main()
