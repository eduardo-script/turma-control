const  tela  = require("readline-sync")
const cadastro = require("./src/cadastro-aluno")
const notas = require("./src/cadastrar-notas")

function main() {
  let loop = true

  while(loop) {
    console.clear()
    console.log("1 - Cadastrar aluno | 2 - Adicionar Notas | 3 - Listar | 0 - Sair")
   const opcao:string = tela.question("Deseja continuar? ")

    switch(opcao) {
      case "0":
        loop = false
      break
      case "1":
	cadastro.telaCadastro()
      break
      case "2":
	notas.telaCadastrarNotas()
      break
      case "3":
      	cadastro.telaListaAlunos()
	break
      default:
        console.log("Opção invalida!")  
      break
    }      
  }
}

main()
