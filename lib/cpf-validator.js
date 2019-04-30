function cpfValidator(cpfNumber){
  if(cpfNumber.length !== 11){
          return false
        }
        let multiplier = 10
        let nineDigits = cpfNumber.substring(0, 9)
        .split('')
        .map(Number)
        .map(function(x) {return x * multiplier--})
        .reduce(function(a, b) {
    return a + b;
  }, 0);
  const result = nineDigits % 11;
  return firstDigitValidator(result)
}

function firstDigitValidator(result){
if (result < 2){
  return 0;
} else{
  return 11 - result;
}
}

module.exports.cpfValidator = cpfValidator;