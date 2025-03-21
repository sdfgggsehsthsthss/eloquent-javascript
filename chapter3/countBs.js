
function countBs(Str){
  for(var counter = 0 , bCounter = 0; counter < Str.length ;counter++) {
  if(Str[counter] === `B`){
  bCounter++;
  }
  }
  return{
   characters: counter, 
   Bs:  bCounter
  };
}
console.log(countBs(`KJBDAKBDABDKADAKJDLAWDBKAWBDAKWDALBAWBAWLNDLABAWBABWL`))
