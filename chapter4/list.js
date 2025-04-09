let array = [1, 2, 3, 4, 5, 6];

arrayToList = (x) => {
        if(x.length === 0)return null;
    
    Object = {
        value : x[0],
        rest : arrayToList(x.slice(1)), 
    }
    return Object;
};

console.log(JSON.stringify(arrayToList(array)));    
