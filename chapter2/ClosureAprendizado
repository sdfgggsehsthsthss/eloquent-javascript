function soma(){
  /*solicitando um prompt pra interacao*/
  a = Number(prompt());
  b = Number(prompt());
  // funcao interna que precisa de uma maneira especifica pra ser chamada , no caso declarando uma funcao com soma e parametros e a chamando com parametros vazio ou chamadno soma(a, b)() com um segunco parametro vazio que chama a funcao anonima//
  return () => a + b;
}
const funcaoQSoma = soma(1, 1);
console.log(funcaoQSoma())
