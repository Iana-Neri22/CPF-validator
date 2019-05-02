function cpfValidator(cpfNumber){

  if (Number.isInteger(cpfNumber)){
    cpfNumber = cpfNumber.toString()
  }

  cpfNumber = cpfNumber.replace(/[^\d]+/g, '');

  if(cpfNumber.length !== 11){
          return false
        }
  return calculate(cpfNumber);
}

function calculate(cpfNumber){
  let firstDigitChecker = parseInt(cpfNumber.substring(9, 10));
  function multiply(multiplo){
        let nineDigits = cpfNumber.substring(0, 9)
        .split('')
        .map(Number)
        .map((x) => {
          return x * multiplo--})
        .reduce((a, b) => {
    return a + b;
  }, 0);
  return result = nineDigits % 11;}
  multiply(10)
  let generateDigit;

  if (result < 2 || result > 9) {
    generateDigit = 0;
  } else {
    generateDigit = 11 - result;
  }

  return firstDigitChecker === generateDigit ? true : false
}

module.exports.cpfValidator = cpfValidator;