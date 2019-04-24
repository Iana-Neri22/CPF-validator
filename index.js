// function hasElevenNumbers(cpfNumber){
//   if(cpfNumber.length === 11){
//     //No lugar de true vai executar outra função
//     return true;
//   }
// }
// console.log(hasElevenNumbers("40084948809"))
// //Beleza, até aqui recebo a string com 11 números e valido se contém 11 números

let cpfNumber = 400849488;

let convertedCpf = cpfNumber.toString().split('').map(Number)

let multiplication = []

for (let multiplier = 10; multiplier >=2; multiplier--) {
    multiplication.push(convertedCpf[0] * multiplier)
    convertedCpf.shift();
  }


const arrSum = arr =>
multiplication.reduce(function(a, b) {
  return a + b;
}, 0);

// console.log(convertedCpf);

let resultado = arrSum() / 11

// let resto = ""

var precision = (resultado + "").split(".")[1];
let meuArray = [];
meuArray.push(precision[0])
numero = Number(meuArray)

if(numero === 0 || numero ===1){
  console.log(true)
} else{
  console.log(false)
}