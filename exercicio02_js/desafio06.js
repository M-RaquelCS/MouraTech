function bhaskara(a, b, c){
  var delta = (b**2)- 4*a*c;
  var raiz = Math.sqrt(delta);

  var x1 = ((-1*b) + raiz)/(2*a);
  var x2 = ((-1*b) - raiz)/(2*a);
  
  if(delta < 0){
    console.log("[]")
    var a = []
    return (a)
  } else if(delta == 0){
    x1 = x2;
    var b = [x1];
    console.log(b)
    return(b)
  } else {
    var c = [x1, x2];
    console.log(c)
    return (c)
  }
}

bhaskara(-3, 18, -15)