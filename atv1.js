
var notas = []
var alunos = []

var media = 0

for (let index = 0; index < 5; index++) {
  var nome = prompt('Digite o nome do aluno');
  var nota = prompt('Digite a nota do aluno');

  notas.push(nota)
  alunos.push(nome)
  media += parseInt(nota)

}

for (let index = 0; index < 5; index++) {
  console.log('Aluno:' + alunos[index] + ' Nota: ' + notas[index])

}
console.log("Media da notas:")

console.log(media / 5);