const { textoDoTeclado, numeroDoTeclado } = require('./helpers')
class celular {
    cor = ""
    tamanho = 0
    ligado = false
    ligaDesliga = () => {
      this.ligado = !this.ligado;
    } 
  }
const main = async () => {
    //declarar o tamanho do nosso vetor
    let tamanho = "";
    //loop while significa enquanto a condição for verdadeira
    while(!tamanho || tamanho < 0){
        tamanho = await numeroDoTeclado("Digite o tamanho do array:")
        if(!tamanho || tamanho < 0)
        {
            console.log("Erro no tamanho do vetor!")
        }
    }
    //declaro o vetor já com 10 posições 
    const vetor = new Array(tamanho)
    //declarar o laço(loop)
    //para i = 0, enquanto i < tamanho incremente o i em
    //mais 1 a cada volta do laço
    for(let i = 0; i < tamanho; i++){
        if(i == 0)
        {
            vetor[i] = 1
        }else{
            //para obter a posicao anterior colocamos vetor[i - 1]
            vetor[i] = vetor[i-1] * 2
            //para obter a proxima posicao colocamos vetor[i + 1]

        }
    } 
    console.log(vetor)  
    let cel = new celular()
    console.log(cel)

    cel.cor = "vermelho"
    cel.tamanho = 10
    cel.ligaDesliga()
    console.log(cel)
    return 
}
main()


