function hasElevenNumbers(cpfNumber){
  if(cpfNumber.length === 11){
    //No lugar de true vai executar outra função
    return true;
  }
}
console.log(hasElevenNumbers("40084948809"))
//Beleza, até aqui recebo a string com 11 números e valido se contém 11 números

//Os dois últimos são chamados de dígitos verificadores (DV)
//Cada DV é calculado com base nos dígitos anteriores
//Recebi os 11 dígitos mas no momento só preciso dos 9 primeiros


