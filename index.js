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
  console.log(nineDigits.toString().split('').map(Number))
}

console.log(hasElevenNumbers("40084948809"))

// const multiplication = []

// for (let multiplier = 10; multiplier >=2; multiplier--) {
//     multiplication.push(convertedCpf[0] * multiplier)
//     convertedCpf.shift();
//   }

// const arrSum = () =>
// multiplication.reduce(function(a, b) {
//   return a + b;
// }, 0);

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