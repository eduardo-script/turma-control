const tela = require("readline-sync")
const { titulo } = require("./utils")

// criar uma lista de string para guardas os alunos
let alunos:string[] = []

// responsável para gerar tela de cadastros


function telaCadastro() {

  titulo("CADASTRO DE ALUNO")
  const nomeAluno:string = tela.question("Nome do aluno: ")
  const dataNascimento:string = tela.question("Data Nascimento: ")
  const contato:string = tela.question("Numero de celular: ")
  
  const aluno = `${nomeAluno};${dataNascimento};${contato}`
  alunos.push(aluno)
  
  console.log("\nLista atualizada:")
  console.log(alunos)
}

//responsável em carregar os alunos cadastrados
function telaListaAlunos() { 
	titulo("LISTA DE ALUNOS")
	  for(let i = 0; i < alunos.length; i++) {
             const partes = alunos[i]!.split(";")
	     const nome = partes[0]
	     const data = partes[1]
	     const celular = partes[2]
	     
             console.log (`${i + 1}.Nome: ${nome} | Nasc: ${data} | Tel: ${celular}`)
  } 

tela.question("\nPressione Enter para voltar ao menu...")

}

// responsável de deixar a função publica
module.exports = { telaCadastro, telaListaAlunos }
