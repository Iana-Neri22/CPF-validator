function cpfValidator(cpfNumber) {
  Number.isInteger(cpfNumber) ? cpfNumber = cpfNumber.toString() : false;
  cpfNumber = cpfNumber.replace(/[^\d]+/g, '').split('');
  return (cpfNumber.length !== 11) ? false : calculate(cpfNumber);
}

function calculate(cpfNumber) {
  const firstDigit = Number(cpfNumber[9]);
  const secondDigit = Number(cpfNumber[10]);
  const nineDigits = cpfNumber.slice(0, 9);
  const tenDigits = cpfNumber.slice(0, 10);

  const firstDigitResult = multiply(10, nineDigits) < 2 ? 0 : 11 - multiply(10, nineDigits);
  const secondDigitResult = multiply(11, tenDigits) < 2 ? 0 : 11 - multiply(11, tenDigits);

  return (firstDigit === firstDigitResult && secondDigit === secondDigitResult) ? true : false;
}
  
function multiply(multiplier, array) {
  return array.map((number) => {
    return number * multiplier--;
  }).reduce((a, b) => {
    return a + b;
  }, 0) % 11;
}

module.exports.cpfValidator = cpfValidator;