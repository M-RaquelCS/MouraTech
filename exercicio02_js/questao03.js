function basket(string){

  let record = 0;
  let jogo = 0;
  
  var array = string.split(' ');
  var arrayf = array.map(Number);

  let recorde = arrayf[0];
  
  for(let i = 0; i < arrayf.length; i++){

    if(arrayf[i] > recorde){

        record +=1
        recorde = arrayf[i]
    };
  };

  var min = Math.min(...arrayf);
  jogo = arrayf.indexOf(min)+1;
  
  return [record,jogo];

}

console.log(basket('10 20 20 8 25 3 0 30 1'))