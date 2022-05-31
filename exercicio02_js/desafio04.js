/*function dinheiro(number){
  let value = number.toFixed(2)
  if(value < 0){
    var negativo = value*(-1)
    return (`-R$ ${negativo}`)
  }else {
    return (`R$ ${value}`)
  }
}*/

function dinheiro(number){
  var f = number.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}).replace(' ', ' ');
  console.log(f)
  return f
}
