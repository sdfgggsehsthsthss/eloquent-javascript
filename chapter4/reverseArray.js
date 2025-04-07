 array = [1,2,3,4,5,6,7];
  
 reversorDeArrayCriandoOutra =  (x) => {
  let i = 0;
  let i1 = 1;
  let temp = [];
   for(let index of x){
    
    temp.unshift(index);
    i++;
    i1++;
  }
 return temp;
}
console.log(array[array.length - 1]);
reversorDeArray(array)
 array = [1,2,3,4,5,6,7];
  
 reversorDeArray =  (x) => {
  let i = 0;
  let temp = [];
    for(index of x){
      temp.unshift(index);
    };
   for(let index of x){
     x[i] = temp[i];
     i++; 
   }
 
 return x;
}
console.log(array[array.length - 1]);
reversorDeArray(array)
