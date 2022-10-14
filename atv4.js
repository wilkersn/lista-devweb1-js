

var notasAlunos = []
var nomeAlunos = []

var x = 1

for (let i = 0; i < x; i++) {

  let nomeAluno = prompt("Digite o nome do aluno")

  switch (nomeAluno) {
    case "fim":

      break;

    default:
      nomeAlunos.push(nomeAluno)
      let notaAluno = prompt("Digite a nota do aluno")
      notasAlunos.push(notaAluno)
      x++
      break;
  }


}

console.log(nomeAlunos)
console.log(notasAlunos)

var maioresNotas = []
var maiorNota = {
  nome: '',
  nota: 0
}

for (let index = 0; index < notasAlunos.length; index++) {
  if (notasAlunos[index] >= 7) {
    maioresNotas.push(nomeAlunos[index])
  }

  if (maiorNota.nota < notasAlunos[index]) {
    maiorNota.nome = nomeAlunos[index]
    maiorNota.nota = notasAlunos[index]
  }

}

console.log("A maior nota foi do aluno(a) " + maiorNota.nome + " Nota: " + maiorNota.nota);

if (maioresNotas) {
  console.log("As maiores notas foram " + maioresNotas);
} else console.log('Não há alunos em destaque na turma');