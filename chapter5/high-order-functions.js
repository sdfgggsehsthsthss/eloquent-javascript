arrayvazia = [];
arrayNormal = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let objetificado = {
    primeiraArr: [[1, 2, 3, 4, 45, 5, 6, 0], [122, 3, 4, 4, 45, 45, 45, 465, 6, 5, 655, 656, 75,]],
    segundaArr: [4, 3, 5, 65, 4, 33, 2],
    terceiraArr: [1, 2, 5, 3, 5, 6, 7, 5, 4, 6, 7,]
};
function transferenciaDeArray(array1 = [], array2) {

    for (let index of array2) {
        array1.push(index)
    }
    return array1
};
transferenciaDeArray(arrayvazia, arrayNormal);
console.log(arrayvazia, `= arrayVazia`)
function iteracaoDeObjetos(objeto1) {
    for (let i in objeto1) {

        console.log(transferenciaDeArray(undefined, objeto1[i]));
    };
}
iteracaoDeObjetos(objetificado);
//for.each exemplo
let array = [];
arrayvazia.forEach(element => {
    element += element
    array.push(element);
});
console.log(array)
//.filter exemplo
filtrado = arrayNormal.filter(indice => indice % 3 == 0);
console.log(filtrado);
//.map exemplo
let mapeando = {};
mapeando.novaArray = objetificado.segundaArr.map((elemento, indice, array) => {
    let indiceRespectivo = `o numero ${elemento} esta no indice ${indice} da array`;
    return indiceRespectivo
})
console.log(mapeando.novaArray)
// .map exemplo 2 usando objetos
let mapeando2 = objetificado.terceiraArr.map((elemento, indice, array) => { return elemento = ((Math.random() * 10) * elemento).toFixed(2) });
console.log(mapeando2);
/*.reduce exemplo 1
reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T
*/
let reduzido1 = arrayNormal.reduce((acumulado, elemento, index, array) => { return acumulado = (elemento > acumulado ? elemento : acumulado) });
console.log(`o maior valor dessa array e:[`, reduzido1, `]`);
// reduce exemplo 2
let reduzido2 = objetificado.segundaArr.reduce((valorAnterior, valorAtual, index, array) => { return (valorAnterior + valorAtual) }, 0) / objetificado.segundaArr.length;
console.log(`a media da segunda array do objeto objetificado e:`, reduzido2);
//find example Int8Array.find(predicate: (value: number, index: number, obj: this) => boolean, thisArg?: any): number | undefined
let achando1 = arrayNormal.find(elemento => elemento % 4.5 === 0)
console.log(achando1);
//some exemplo ReadonlyArray.some(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean
let comparacaoDeArrayDeArrays = objetificado.primeiraArr.some((elemento , index,array) => { return elemento.length >= 14});
console.log(comparacaoDeArrayDeArrays);
