function cpfValidator(cpfNumber){
  if(cpfNumber.length !== 11){
          return false
        }
        let multiplier = 10
        let nineDigits = cpfNumber.substring(0, 9)
        .split('')
        .map(Number)
        .map((x) => {
          return x * multiplier--})
        .reduce((a, b) => {
    return a + b;
  }, 0);
  const result = nineDigits % 11;
  return firstDigitValidator(result)
}

function firstDigitValidator(result){
return result < 2 ? 0 : 11 - result
}

module.exports.cpfValidator = cpfValidator;