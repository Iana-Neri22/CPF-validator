function hasElevenNumbers(cpfNumber){
    if(cpfNumber.length === 11){
      extractDigits(cpfNumber)
    }
}

function extractDigits(cpfNumber){
  const nineDigits = cpfNumber.substring(0, 9)
  convertCpf(nineDigits)
}

function convertCpf(nineDigits){ 
  let separado = nineDigits.toString().split('').map(Number)
  multiply(separado)
}

//Até aqui os números são separados
function multiply(separado){
  const multiplication = []
  
  for (let multiplier = 10; multiplier >=2; multiplier--) {
      multiplication.push(separado[0] * multiplier)
      separado.shift();
    }
    sumNumbers(multiplication)
  }
  
  function sumNumbers(multiplication){
  let soma = multiplication.reduce(function(a, b) {
    return a + b;
  }, 0);
  console.log(soma)
  }
  console.log(hasElevenNumbers("40084948809"))

// const resultado = arrSum() / 11

// console.log(Number.isInteger(resultado))

// const precision = (resultado + "").split(".")[1];
// const meuArray = [];
// meuArray.push(precision[0])
// numero = Number(meuArray)

// // if(numero === 0 || numero ===1){
// //   console.log(true)
// // } else{
// //   console.log(false)
// // }