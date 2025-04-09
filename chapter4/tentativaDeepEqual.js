let object1 = { nome: `maria`,idade : 30,cidade: `brasilia`};
let object2 = { nome: `felipe`,idade :26,cidade: `brasilia`};

//funcao que compara se dois parametros sao iguais
deepEqual = (x, y) => {
    //primeiro eu comparo os parametros
    if(x === y) return true;
    //digo se for null pra retornar falso
    if(x === null || y === null) return false;
    //segundo eu comparo se for uma array ou string da pra fazer um for of
        if(typeof x !== "object" && typeof y !== "object" && x !== null && y !== null){
            let i = 0;
                for(let index of x){
                    if(index !== y[i])return false
                    i++
                }
                if(String(x) !== String(y)) return false;
                if(Number(x)!== Number(y)) return false;
            };
        
    //terceiro eu comparo se as propriedades sao iguais em numero
    let chavesX = Object.keys(x);
    let chavesY = Object.keys(y);
        if(chavesX.length !== chavesY.length) return false;
    //quarto eu comparo se o valor das  propriedades sao iguais
        if(typeof x === "object" && typeof y === "object"){
            for(let index in x){
                if(!deepEqual(x[index],y[index]))return false;    
                };

        };
    // retornar algo nao sei o que estou perdido socorro
    return true;
};
console.log(deepEqual(object1,object2))
