function cpfValidator(cpfNumber){

  Number.isInteger(cpfNumber) ? cpfNumber = cpfNumber.toString() : false;
    
  cpfNumber = cpfNumber.replace(/[^\d]+/g, '');

  return (cpfNumber.length !== 11) ? false : calculate(cpfNumber);
}

function calculate(cpfNumber){
  let firstDigitChecker = parseInt(cpfNumber.substring(9, 10));
  let secondDigit = parseInt(cpfNumber.substring(10, 11));
  function multiply(multiple){
        let nineDigits = cpfNumber.substring(0, 9)
        .split('')
        .map((number) => {
          return number * multiple--})
        .reduce((a, b) => {
    return a + b;
  }, 0);
   
return nineDigits % 11;
}
  
  function multiply2(multiple){
        let nineDigits = cpfNumber.substring(0, 10)
        .split('')
        .map((number) => {
          return number * multiple--})
        .reduce((a, b) => {
    return a + b;
  }, 0);
   
return nineDigits % 11;
}
  let resultado = multiply(10) < 2 ? 0 : 11 - multiply(10);
  let resultado2 = multiply2(11) < 2 ? 0 : 11 - multiply2(11);
  

   return (firstDigitChecker === resultado && secondDigit === resultado2) ? true : false;
   
}


module.exports.cpfValidator = cpfValidator;