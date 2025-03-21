
const isEven = (x) => {
  if(x === 0){
    return `even`;
  }else if(x == 1){
    return `odd`;
  }else if(x < 0){
   return isEven(x + 2);
 }else
   return isEven(x - 2);
}
console.log(isEven(-2));
