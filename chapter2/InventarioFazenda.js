function imprimaZeroComRotulo(numero, rotulo){
  numeroString = String(numero);
  while (numeroString.length < 3){
    numeroString = `0` + numeroString;
  }
  console.log(`${numeroString} ${rotulo}`)
}
function imprimaInventarioFazenda(vacas, galinhas, porcos){
  imprimaZeroComRotulo(vacas, `vacas`);
  imprimaZeroComRotulo(galinhas, `galinhas`);
  imprimaZeroComRotulo(porcos, `porcos`);
}
console.log(imprimaInventarioFazenda(12, 31, 5);
