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
  if (result < 2){
    return 0;
  } else{
    return 11 - result;
  }
}



//   function passToInteger(soma){
//     const precision = (soma + "").split(".")[1];
    
//     const meuArray = [];
    
//     meuArray.push(precision[0])
//     if(meuArray[0] === "0"){
//       console.log("o primeiro DV é 0")
//     }
//   }

// function cpfValidator(cpfNumber){
//   if(cpfNumber !== NaN){
//    cpfNumber = toString(cpfNumber)
//    console.log(typeof(cpfNumber)) 
//   }
// }
 
//  function cpfValidator(cpfNumber){
//   //  if(cpfNumber !== NaN){
//   //   cpfNumber = toString(cpfNumber) 
//   //  }

//   checkLength(cpfNumber) 

//  }

//  function checkLength(cpfNumber){
//   if(cpfNumber.length !== 11){
//     return false
//   }
//  }

module.exports.cpfValidator = cpfValidator;