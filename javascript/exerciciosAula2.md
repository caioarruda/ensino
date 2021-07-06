## Exercícios Aula 2

1) Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
e mostre seu peso ideal, utilizando as seguintes fórmulas:
 - para sexo masculino: peso ideal = (72.7 * altura) - 58
 - para sexo feminino: peso ideal = (62.1 * altura) - 44.7
```
Aqui está em portugol desenvolver em JS
inicio
  ler nome
  ler sexo
  se sexo == M então
    peso_ideal = (72.7 * altura) - 58
  senão
    peso_ideal = (62.1 * altura) – 44.7
  fim_se
    escrever peso_ideal
fim
```

2) Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
ultrapassar este valor, calcular e escrever o seu salário total.

3) Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'
