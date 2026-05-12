const tela = require("readline-sync")
const { titulo } = require("./utils.ts")
const { alunos } = require("./data.ts")

let notas:string[] = []

function telaCadastrarNotas() {

  titulo("CADASTRO DE NOTAS")

  const idAluno:number = tela.question("Informe o codigo do aluno: ")
  
  const posicao:number = idAluno - 1
  
  if (posicao === undefined) {
  	console.log("Aluno não encontrado")
  } else {
  const n1 = tela.question("Informe a primeira nota: ")
  const n2 = tela.question("Informe a terceira nota: ")
  const n3 = tela.question("Informe a terceira nota: ")
  

  notas.push(`${idAluno}, ${n1};${n2},${n3}`)
 }
}


export = { telaCadastrarNotas }  
