function cpfValidator(cpfNumber){
  cpfNumber = cpfNumber.replace(/[^\d]+/g, '');
  if(cpfNumber.length !== 11){
          return false
        }
        
  return calculate(cpfNumber) < 2 ? 0 : 11 - result
}

function calculate(cpfNumber){
  let multiplier = 10
        let nineDigits = cpfNumber.substring(0, 9)
        .split('')
        .map(Number)
        .map((x) => {
          return x * multiplier--})
        .reduce((a, b) => {
    return a + b;
  }, 0);
  return result = nineDigits % 11;
}

module.exports.cpfValidator = cpfValidator;