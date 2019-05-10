function cpfValidator(cpfNumber) {
  Number.isInteger(cpfNumber) ? cpfNumber = cpfNumber.toString() : false;
  cpfNumber = cpfNumber.replace(/[^\d]+/g, '').split('').map(Number);
  return (cpfNumber.length !== 11) || cpfNumber.every((item) => item === cpfNumber[0]) ? false : calculate(cpfNumber);
}

function calculate(cpfNumber) {
  return (cpfNumber[9] === multiply(10, cpfNumber, 9) && cpfNumber[10] === multiply(11, cpfNumber, 10)) ? true : false;
}
  
function multiply(multiplier, array, sliceNum) {
  array = array.slice(0, sliceNum);

  const sum = array.reduce((acum, curr) =>{
    return (curr * multiplier --) + acum;
  }, 0) % 11;
  
  return (sum < 2) ? 0 : 11 - sum;
}

module.exports.cpfValidator = cpfValidator;