let objeto0 = {
  numero: [`um`, `dois`],
};
let objeto1 = {
  numero: [`um`, `dois`],
};

//criar uma variavel que recebe a propriedade do objeto
let array0 = JSON.stringify(objeto0.numero);
let array1 = JSON.stringify(objeto1.numero);

// funcao que compara o valor dentro de uma propriedade de dois objetos
compararPropriedade = (objeto1, objeto2) => {
  if (array1 == array0) {
    console.log(`os objetos são iguais`);
  } else {
    console.log(`os objetos são diferentes`);
  }
};
//chamar a funcao
compararPropriedade(objeto0, objeto1);
let objeto3 = objeto0;
console.log(objeto0 === objeto3);
