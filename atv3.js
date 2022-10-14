

var temperatura = []

let maiorTemp = 0
let maiorTempDia
let menorTemp = 200
let menorTempDia

const diaDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta",
  "Sexta", "Sabado"]

for (const key in diaDaSemana) {
  let temp = prompt('Digite a temperatura do dia ' + diaDaSemana[key]);
  temperatura.push(parseInt(temp))
}

for (let i = 0; i < 7; i++) {

  if (temperatura[i] < menorTemp) {
    menorTemp = parseInt(temperatura[i])
    menorTempDia = diaDaSemana[i]
  }
  if (temperatura[i] > maiorTemp) {
    console.log('afsaf');
    maiorTemp = parseInt(temperatura[i])

    maiorTempDia = diaDaSemana[i]
  }

}




console.log("A maior temperatura da semana foi " + maiorTemp + " no(a) " + maiorTempDia);
console.log("A menor temperatura da semana foi " + menorTemp + " no(a) " + menorTempDia);