range = (x,y,z) =>{
  
  let arrayVazia = [x];
  while(x != y){
   if(z != undefined){
     if(x > y){
         x -= z;
         if(x < y) break;      
              }     
     if(x < y){
        x += z;
        if(x > y)break;       
              }
     arrayVazia.push(x);
     
   };
   if(z == undefined){
   (x > y ? x-- : x++);
   arrayVazia.push(x);
   };
  };
 return arrayVazia;
}
sum = (arraySoma) =>{
let soma = 0
for(let i = 0;i < (arraySoma.length ); i++){
  let num1 = parseInt(arraySoma[i]);      
  soma += num1 ;
  }
  return soma;
}
range(1,10,2)
