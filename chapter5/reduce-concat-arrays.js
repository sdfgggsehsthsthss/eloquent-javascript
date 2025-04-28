let arrayOfArrays = [[1, 2, 3, 4, 5, 6], [12, 3, 4, 5, 6, 7], [8, 7, 6, 5, 3, 2]];

let arrayNova = [];
arrayOfArrays.reduce((valorAnterior, valorAtual, index, array) => {

    arrayNova = valorAnterior.concat(valorAtual);
    return arrayNova



}, [])
console.log(arrayNova);
