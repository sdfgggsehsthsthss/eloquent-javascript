console.log(arroz)
for(var arroz = `comida`, counter = 0 , size = Number(prompt(`size`)); counter < size; counter++, arroz=`|${arroz}`, arroz=`${arroz}|` ){
  console.log(`${` `.repeat(12 - counter)}${arroz}` )
}
console.log(arroz);
