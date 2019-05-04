function cpfValidator(cpfNumber){

  Number.isInteger(cpfNumber) ? cpfNumber = cpfNumber.toString() : false;
    
  cpfNumber = cpfNumber.replace(/[^\d]+/g, '');

  return (cpfNumber.length !== 11) ? false : calculate(cpfNumber);
}

function calculate(cpfNumber){
  let firstDigitChecker = parseInt(cpfNumber.substring(9, 10));
  let secondDigit = parseInt(cpfNumber.substring(10, 11));
  function multiply(multiplo){
        let nineDigits = cpfNumber.substring(0, 9)
        .split('')
        .map(Number)
        .map((x) => {
          return x * multiplo--})
        .reduce((a, b) => {
    return a + b;
  }, 0);
  let result = nineDigits % 11;
return result
}
  
  function multiply2(multiplo){
        let nineDigits = cpfNumber.substring(0, 10)
        .split('')
        .map(Number)
        .map((x) => {
          return x * multiplo--})
        .reduce((a, b) => {
    return a + b;
  }, 0);
  let result = nineDigits % 11;
return result
}
  let resultado = multiply(10);
  let resultado2 = multiply2(11);
  let generateDigit = '';
  if (resultado < 2) {
    generateDigit = 0;
  } else {
    generateDigit = 11 - resultado;
  }
  let generateDigit2 = '';
  if (resultado2 < 2) {
    generateDigit2 = 0;
  } else {
    generateDigit2 = 11 - resultado2;
  }

   return (firstDigitChecker === generateDigit && secondDigit === generateDigit2) ? true : false;
   
}

module.exports.cpfValidator = cpfValidator;