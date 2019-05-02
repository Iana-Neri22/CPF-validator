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
  let multiplier = 10
        let nineDigits = cpfNumber.substring(0, 9)
        .split('')
        .map(Number)
        .map((x) => {
          return x * multiplier--})
        .reduce((a, b) => {
    return a + b;
  }, 0);
  let result = nineDigits % 11;
  let generateDigit;

  if (result < 2 || result > 9) {
    generateDigit = 0;
  } else {
    generateDigit = 11 - result;
  }

  return firstDigitChecker === generateDigit ? true : false
}

module.exports.cpfValidator = cpfValidator;