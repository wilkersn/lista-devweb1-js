var idadeClientes = []
var nomeClientes = []

var x = 1

for (let i = 0; i < x; i++) {

  let nomeCliente = prompt("Digite o nome do Cliente")

  switch (nomeCliente) {
    case "fim":

      break;

    default:
      nomeClientes.push(nomeCliente)
      let idadeCliente = prompt("Digite a idade do Cliente")
      idadeClientes.push(parseInt(idadeCliente))
      x++
      break;
  }
}

var clientesPrioridade = ''
var clientesComuns = ''

for (let a = 0; a < nomeClientes.length; a++) {
  if (idadeClientes[a] > 59) {
    let aux = 'Cliente:' + nomeClientes[a] + ' Idade:' + idadeClientes[a] + '\n'
    console.log(aux);
    clientesPrioridade += aux
  } else {
    let aux = 'Cliente: ' + nomeClientes[a] + ' Idade' + idadeClientes[a]
    clientesComuns += aux
  }
}

console.log("Grupo fila preferencial\n" + clientesPrioridade);
console.log("Grupo fila comum\n" + clientesComuns);