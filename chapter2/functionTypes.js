// funcao de retornar valor
const valor = function(a){
  console.log(a + 2);
}
valor(Number(prompt(`valor`)));
//funcao que retorna funcao closure
function soma(x, y){
 return () => x + y;
}
const somatoria = soma(4, 5);
const somatoria1 = soma(5, 6);
console.log(somatoria());
console.log(somatoria1());

const direcao = (z) =>{
  if(z > 0){
    console.log(`direita`);
  }else if ( z < 0){
    console.log(`esquerda`)
  }else 
    console.log(`vai pra onde?`)
} 
direcao(Number(prompt(`direcao`)));

function contagemDecrescente(f){
  if(f === 0) return [];
  return [f].concat(contagemDecrescente(f - 1));
}
contagemDecrescente(Number(prompt(`contagem regressiva`)));
