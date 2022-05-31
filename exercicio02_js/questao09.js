/**
 * Embora não seja uma atividade muito divertida, pagar boletos é algo comum no dia a dia das pessoas. No entanto, a maioria delas não conhece exatamente o significado da sequência numérica dessas contas.

Existe um número na maior parte dos boletos e contas chamado Linha Digitável, com 48 dígitos separados em quatro campos. De modo geral, a linha digitável reproduz em números o código de barras. Com ela, você consegue realizar o pagamento de uma conta, mesmo sem ter ela em mãos.

Originalmente o código de barras tem 44 dígitos, mas que para a geração da linha Digitável é separado em quatro campos de 11 dígitos cada, onde é adicionado mais um dígido: o Dígito de Auto-Conferência (DAC), para evitar erros de digitação.

O DAC (Dígito de Auto-Conferência) módulo 11, de um número é calculado como segue:

1) multiplicando cada algarismo, pela seqüência de multiplicadores 2,3,4,5,6,7,8,9,2,3,4.... posicionados da direita para a esquerda;

DAC módulo 11 da seguinte seqüência de números: 01230067896.
2) Soma dos produtos da multiplicação:

0 + 3 + 4 + 27 + 0 + 0 + 36 + 35 + 32 + 27 + 12 = 176

3) Resto da divisão do resultado da soma acima por 11

Resto = 176 % 11 = 0

4) Por fim o DAC é igual a: 11 - Resto da divisão<

DAC = 11 - 0 = 11, então DAC = 0 conforme observação abaixo.

Observação: Se o DAC calculado for 10 ou 11 o DAC será 0.

Dito isto, elabore uma função que recebe os números de um código de barras (string com 44 caracteres) e retorne a linha digitável.


Nome da função: linhaDigitavel

Paramêtros: (string)

Retorno: string
 */

let bloco1 = '';
let bloco2 = '';
let bloco3 = '';
let bloco4 = '';

var multiplicadores = '43298765432'

function  linhaDigitavel(string){
  for (let variavel in string){
    if( variavel < 11){
      bloco1 += string[variavel]
    }else if (variavel < 22){
      bloco2 += string[variavel]
    }else if (variavel < 33){
      bloco3 += string[variavel]
    }else {
      bloco4 += string[variavel]
    }
  }
  //console.log(bloco1, bloco2, bloco3, bloco4)

  let soma1 = 0;
  let soma2 = 0;
  let soma3 = 0;
  let soma4 = 0;

  for(let variavel in multiplicadores){
    let rest = parseInt(multiplicadores[variavel] * parseInt(bloco1[variavel]))
    soma1 += rest
  }
  //console.log(soma1)

  for(let variavel in multiplicadores){
    let result = parseInt(multiplicadores[variavel] * parseInt(bloco2[variavel]))
    soma2 += result
  }
  //console.log(soma2)

  for(let variavel in multiplicadores){
    let result = parseInt(multiplicadores[variavel] * parseInt(bloco3[variavel]))
    soma3 += result
  }
  //console.log(soma3)

  for(let variavel in multiplicadores){
    let result = parseInt(multiplicadores[variavel] * parseInt(bloco4[variavel]))
    soma4 += result
  }
  //console.log(soma4)

  let restBloco1 = soma1 % 11;
  let restBloco2 = soma2 % 11;
  let restBloco3 = soma3 % 11;
  let restBloco4 = soma4 % 11;

  let dac1 = 11 - restBloco1;
  let dac2 = 11 - restBloco2;
  let dac3 = 11 - restBloco3;
  let dac4 = 11 - restBloco4;

  if (dac1 == 10 || dac1 == 11) {
    dac1 = 0;
  }

  if (dac2 == 10 || dac2 == 11) {
    dac2 = 0;
  }

  if (dac3 == 10 || dac3 == 11) {
    dac3 = 0;
  }
  if (dac4 == 10 || dac4 == 11) {
    dac4 = 0;
  }

  return `${bloco1}-${dac1} ${bloco2}-${dac2} ${bloco3}-${dac3} ${bloco4}-${dac4}`

}

//console.log(linhaDigitavel("83880000001596700110070418832051019781121383"))