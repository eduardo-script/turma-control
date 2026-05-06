const tela = require("readline-sync")

let alunos:string[] = []

function telaCadastro() {
  const nomeAluno:string = tela.question("Nome do aluno: ")
  const dataNascimento:string = tela.question("Data Nascimento: ")
  const contato:string = tela.question("Numero de celular: ")
  
  const aluno = `${nomeAluno};${dataNascimento};${contato}`
  alunos.push(aluno)
  
  console.log("\nLista atualizada:")
  console.log(alunos)
}

function telaListaAlunos() {
	  for(let i = 0; i < alunos.length; i++) {
    console.log (`${i + 1}. ${alunos[i]}`)
  }
}

// responsável de deixar a função publica
export = { telaCadastro, telaListaAlunos }
