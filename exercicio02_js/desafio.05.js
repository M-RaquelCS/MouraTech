function saque(valor){

  cont100 = Math.floor(valor/100);
  resto = valor % 100;
  
  cont50 = Math.floor(resto/50);
  resto = resto % 50;

  cont20 = Math.floor(resto/20);
  resto = resto % 20;

  cont10 = Math.floor(resto/10);
  resto = resto % 10;

  cont5 = Math.floor(resto/5);
  resto = resto % 5;

  cont2 = Math.floor(resto/2);
  restof = resto % 2;

  if(valor <= 0 || restof !== 0){
    var a = {};
    return a;
  } else {
    return {
      "R$100": cont100, 
      "R$50": cont50, 
      "R$20": cont20, 
      "R$10": cont10, 
      "R$5": cont5, 
      "R$2": cont2
    };
  }
  
}

//console.log(saque(-10))