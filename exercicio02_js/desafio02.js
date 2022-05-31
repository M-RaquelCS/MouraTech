function juros(capital, taxa, tempo){
  var montante = (capital*(1+taxa)**tempo).toFixed(2);
  console.log(montante)
  return montante;
}

juros(1000, 0.02, 36)