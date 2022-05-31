function triangulo(a,b,c){
  if(a<(b+c)){
    if(b < (a+c)){
      if(c < (a+b)){
        console.log('ok')
        return true;
      }
    }
  }
  console.log('not')
  return false;
}

triangulo( 5, 10, 9)