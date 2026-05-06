const  tela  = require("readline-sync")
const cadastro = require("./src/cadastro-aluno")

function main() {
  let loop = true

  while(loop) {
    console.clear()
    console.log("1 - Cadastrar aluno\n2 - Adicionar Notas\n3 - Listar\n0 - Sair")
   const opcao:string = tela.question("Deseja continuar? ")

    switch(opcao) {
      case "0":
        loop = false
      break
      case "1":
	cadastro.telaCadastro()
      break
      case "2":
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
