var saquesValidos = ''
var saquesInvalidos = 0
var totalSaques = 0

var x = 1

for (let i = 0; i < x; i++) {

  let saque = parseInt(prompt("Qual valor do saque?"))

  switch (saque) {
    case 0:

      break;

    default:
      if (saque % 10 == 0) {
        let aux = 'Saque no valor de: ' + saque + '\n'
        totalSaques += saque
        saquesValidos += aux
      } else {
        alert('Valor de saque inválido')
        saquesInvalidos++
      }
      x++
      break;
  }
}

console.log("Saques validos: \n" + saquesValidos);
console.log("Total sacado: \n" + totalSaques);
console.log("Qunatidade de saques invalidos: \n" + saquesInvalidos);