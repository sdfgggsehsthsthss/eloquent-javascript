


let objeto0 = {numero: 0};
let objeto1 = {numero: 0};

    //criar uma variavel que recebe a propriedade do objeto
    let objeto0Chave = objeto0.numero;
    let objeto1Chave = objeto1.numero;
    //criar uma variavel que recebe o valor da propriedade do objeto
    let objeto0Valor = Object.values(objeto0Chave);
    let objeto1Valor = Object.values(objeto1Chave);
    
    console.log(Object.keys(objeto0));
    console.log(objeto0Chave);
    console.log(objeto0Valor);
    // funcao que compara o valor dentro de uma propriedade de dois objetos
compararPropriedade = (objeto1, objeto2) => {
    if( objeto0Chave == objeto1Chave){
        console.log(`os objetos são iguais`);   
    }else {
        console.log(`os objetos são diferentes`);
    }
}
//chamar a funcao
compararPropriedade(objeto0, objeto1);
