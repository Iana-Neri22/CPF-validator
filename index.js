function hasElevenNumbers(cpfNumber){
    if(cpfNumber.length === 11){
      extractDigits(cpfNumber)
    }
}

function extractDigits(cpfNumber){
  console.log(cpfNumber.substring(0, 9));
}

console.log(hasElevenNumbers("40084948809"))

const cpfNumber = 400849488;

const convertedCpf = cpfNumber.toString().split('').map(Number)

const multiplication = []

for (let multiplier = 10; multiplier >=2; multiplier--) {
    multiplication.push(convertedCpf[0] * multiplier)
    convertedCpf.shift();
  }

const arrSum = () =>
multiplication.reduce(function(a, b) {
  return a + b;
}, 0);

const resultado = arrSum() / 11

console.log(Number.isInteger(resultado))

const precision = (resultado + "").split(".")[1];
const meuArray = [];
meuArray.push(precision[0])
numero = Number(meuArray)

// if(numero === 0 || numero ===1){
//   console.log(true)
// } else{
//   console.log(false)
// }