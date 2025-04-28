let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let arrayVazia = [];

let loop = (valorInicial, test, body, update) => {
    let valorAtual = valorInicial;
    while (true) {
        if (!test(valorAtual)) break;
        body(valorAtual);
        valorAtual = update(valorAtual);
    }
}
loop(
    0,
    (i) => i < array.length,
    (i) => arrayVazia.push(array[i]),
    (i) => ++i
);
console.log(arrayVazia)
