var sizeX = Number(prompt(`sizeX`));
var sizeY	= Number(prompt(`sizeY`));
var counter = 0;

for (let vazio = ` `, hash = `#` , axisY = hash + vazio,axisX = vazio + hash;counter <= sizeY ; counter++){
    if(counter % 2 ==0){
      console.log(axisY.repeat(sizeX));
    }else
      console.log(axisX.repeat(sizeX));
}
