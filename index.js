function cpfValidator(cpfNumber){
    if(cpfNumber.length === 11){
      extractDigits(cpfNumber)
    }
}

function extractDigits(cpfNumber){
  const nineDigits = cpfNumber.substring(0, 9)
  convertCpf(nineDigits)
}

function convertCpf(nineDigits){ 
  let separado = nineDigits.toString().split('').map(Number)
  multiply(separado)
}

function multiply(separado){
  const multiplication = []
  
  for (let multiplier = 10; multiplier >=2; multiplier--) {
      multiplication.push(separado[0] * multiplier)
      separado.shift();
    }
    sumNumbers(multiplication)
  }
  
  function sumNumbers(multiplication){
  let soma = multiplication.reduce(function(a, b) {
    return a + b;
  }, 0);
  console.log(soma / 11)
  }

  function isInteger(soma){
    if(Number.isInteger(soma) === true){
      console.log("O primeiro dígito verificador é zero")
    }
    else{
     passToInteger(soma) 
    }
  }
  function passToInteger(soma){
    const precision = (soma + "").split(".")[1];
    
    const meuArray = [];
    
    meuArray.push(precision[0])
    if(meuArray[0] === "0"){
      console.log("o primeiro DV é 0")
    }
  }