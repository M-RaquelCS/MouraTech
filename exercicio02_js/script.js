// Primeira questão
function cumprimentar(nome){
  console.log(`Olá, ${nome}!`)
}

cumprimentar('Leonardo')

// Segunda questão
function converterIdadeEmAnosParaDias(anos){
  total = anos*365;
  console.log(total)
}

converterIdadeEmAnosParaDias(25)

// Terceira questão
// recebemos dois parâmetros h e d, sendo o h a quantiidade de horas trabalhadas no mês e
// d de dinheiro que é o quanto se recebe por hora
function calcularSalario(h, d){
  total = h*d
  console.log(total)
}

calcularSalario(150, 33)

// Quarta questão
function nomeDoMes(mes){
  const meses = [
    "não existe mês",
    "janeiro", 
    "fevereiro", 
    "março", 
    "abril", 
    "maio", 
    "junho", 
    "julho", 
    "agosto", 
    "setembro", 
    "outubro", 
    "novembro", 
    "dezembro"
  ]

  console.log(meses[mes])
}

nomeDoMes(4)

// Quinta questão
function maiorOuIgual(x,y){

  if(x >= y){
    console.log(true)
  }else {
    console.log(false)
  }
}

maiorOuIgual(2,9)

// Sexta questão
function inverso(n){
  if(Number(n) == n){
    total = n*(-1)
    return(total)
  }else if(Boolean(n) == n){
    return !n ;
  } else {
    return("booleano ou número esperados, mas o parâmetro é do tipo string")
  }
}

inverso(true)

// Sétima questão
function estaEntre(n, min, max, inclusivo) {
  if(min < n < max) return true;
  if(inclusivo === true) return true;
}
estaEntre(10, 100, 50);

// Oitava Questão
function multiplicar(x, y) {
  if(x,y >= 0){
    total = x*y;
    console.log(total);
    return total;
  }
}

multiplicar(2,2);

// Nona questão
function repetir(a, b){
  for(let i=0; i <= b; i++){
    console.log(a)
    return a;
  }
}

repetir("oi",4)