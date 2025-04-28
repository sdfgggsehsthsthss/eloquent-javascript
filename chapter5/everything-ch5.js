let arrayVazia = [];
let arrayCheia = [1, 2, 3, 4, 5, 5, 6, 7, 7];
let arrayPares = [0, 2, 4, 6, 8];
let arrayImpares = [1, 3, 5, 7, 9];

let every1 = (array, predicate) => {
    for (let i of array) {
        if (!predicate(i)) {
            return false
        };
    }
    return true;
};
console.log(every1(arrayPares, (i) => {

    return (typeof i === "number" && i % 2 === 0 ? true : false)

}));
let every2 = (array, predicate) => {
    for (let i of array) {
        if(predicate(i)) return true;
    }
    return false
};
console.log(every2(arrayImpares, (i) => {
        return (typeof i === "number" && i % 2 === 0 ?true : false)
}));
