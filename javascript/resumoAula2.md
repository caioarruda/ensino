# Resumo Aula 2
### Escrevendo meu primeiro programa

A Aula 2 tem o intuito de introduzir o aluno a semântica e aos contextos básicos da programação utilizando-se da linguagem javascript com nodeJS.
## Comentários

Os comentários são colocados escrevendo-se \\ Comentário 
Ex:
```
\\ coloque seu comentário aqui
\*
  pode se colocar dessa forma também
*\
```
Obs: Os comentários devem ser usados com moderação, se suas funções necessitam de muitos comentários é 
porque a codificação não está da melhor forma.

## O tão sonhado IF (se)

O if se caracteriza por uma das estruturas mais importantes na programção, responsável pelos testes lógicos mais básicos e importantes.
Sintaxe:
```
if( [condição] ){
  [bloco de comandos]
} else if ( [condição] ) {
  [bloco de comandos]
} else {
  [bloco de comandos]
}
```
- Dessa forma se apresentam tambem o else if (senão se) e o else (senão).
- O if e o else if sempre esperam uma condição se torne verdadeira para executar o bloco de comando em seu escopo, já o senão é a negação 
da condição colocada no if ou else if anterior a ele.
- O if pode vir seguido com else if ou else tornando-se assim o else if e else opcionais na construção do if
Obs: O if pode se apresentar de uma outra forma comum para diminuir a verbosidade conhecido como iif, ex:
```
let resultado = [condicao] ? [se verdadeiro] : [senão]
```

## Funções ou Métodos

As funções tem o conceito de retornar algum tipo de valor após a execução de um bloco de códigos. Ex:
```
function soma(a, b){
  return a + b
}
//Pode também se apresentar da seguinte forma:
const soma = (a, b) => {
  return a + b
}
```
Os métodos são funções que podem ou não retornar algum valor podendo somente executar um bloco de códigos. Ex:

```
function popularBanco(a, b){
  banco.add({nomeAluno: a})
  banco.add({nomeAluno: b})
}
//Pode também se apresentar da seguinte forma:
const popularBanco = (a, b) => {
  banco.add({nomeAluno: a})
  banco.add({nomeAluno: b})
}
```

## Contexto público/privado

O contexto para declaração das estruturas se dá pela ordem em os ecopos em que são escritas:

-Escopo público é aquele que é comum e visível a todo o código escrito normalmente não é um filho de uma classe, tipo, function ou estrutura.
-Escopo privado é aquele que somente pretence a uma outra estrutura e normalmente está dentro de chaves.
Ex:
```
let variavelPublica = 'Eu sou uma variável pública'
function escopoPrivado(){
  let variavelPrivada = 'Eu sou uma variável privada'
}
```
