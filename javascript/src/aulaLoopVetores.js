const { textoDoTeclado, numeroDoTeclado } = require('./helpers')

const main = async () => {
    // const clientes = [];
    // let  fim = '';
    // do {
    //     const nome = await textoDoTeclado('Digite o nome do cliente: ');
    //     const idade = await numeroDoTeclado('Digite a idade do cliente: ');
    //     const cliente = { nome: nome, idade: idade };
    //     clientes.push(cliente);
    //     fim = await textoDoTeclado('Deseja continuar? [S/N] ');
    // } while(fim.toUpperCase() != 'N');	

    // let index = 0;
    // while(fim != 'fim'){
    //     if(clientes[index]){
    //         console.log(index);
    //     }
    //     i++
    //     if(!clientes[index])
    //     {
    //         console.log('Fim');
    //         break;
    //     }
    // }
    // for(let i = 0; i < clientes.length; i++){
    //     console.log(clientes[i]);
    // }
    // for(let item of clientes){
    //     console.log(item);
    // };

    // clientes.forEach(function(item, index){
    //     console.log(item);
    // })
    // console.log(clientes);

    let  fim = '';
    const clientes = []

    do {
        const nome = await textoDoTeclado( "Digite seu nome")
        const saldo = 0
        const cliente = {
            nome: nome,
            saldo: saldo + await numeroDoTeclado("Seu saldo é:")
        }
        clientes.push(cliente)
        fim = await textoDoTeclado('Deseja continuar? [S/N] ')
    }while(fim.toUpperCase() != 'N')

    console.log("Lista de Clientes")
    console.log(clientes)

    for(let item of clientes) {
        if(item.saldo < 10)
        {
            item.saldo = item.saldo + 1
            item.bonus = true 
        }else{
            item.bonus = false 
        }
    };
    console.log("Lista de Bonificação")
    console.log(clientes)
    for(let i = 0; i < clientes.length; i++){
        if(!clientes[i].bonus){
            console.log("Não bonificado: "+clientes[i].nome)
        }
    }
}


main()
