
var numeros = []
var numerosMult = []


for (let index = 0; index < 10; index++) {
  numeros.push(parseInt(prompt("Digite um numero:")))
}

var numeroX = parseInt(prompt("Digite um numero:"))

for (let index = 0; index < 10; index++) {
  numerosMult.push(numeros[index] * numeroX)
}

console.log(numerosMult)