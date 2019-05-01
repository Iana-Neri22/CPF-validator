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
  let multiplier = 10
        let nineDigits = cpfNumber.substring(0, 9)
        .split('')
        .map(Number)
        .map((x) => {
          return x * multiplier--})
        .reduce((a, b) => {
    return a + b;
  }, 0);
  return result = (nineDigits * 10) / 11;
}

module.exports.cpfValidator = cpfValidator;