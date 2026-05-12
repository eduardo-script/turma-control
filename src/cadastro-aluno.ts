const tela = require("readline-sync")
const { titulo } = require("./utils.ts")
const { addAluno, listarAlunos } = require('./data.ts')

// responsavel para gerar tela de cadastros
function telaCadastro() {
  titulo("CADASTRO DE ALUNO")
  const nomeAluno:string = tela.question("Nome do aluno: ")
  const dataNascimento:string = tela.question("Data Nascimento: ")
  const contato:string = tela.question("Número do celular: ")
  // chama o metodo de colocar alunos no arrays
  addAluno(nomeAluno, dataNascimento,contato)
}

// responsavel em carregas os alunos cadastrados
function telaListaAlunos() {
  titulo("LISTAR ALUNOS")
  listarAlunos()
  tela.question("\nPressione Enter para voltar ao menu...")
}
// responsável de deixar a função publica
export  = { telaCadastro, telaListaAlunos }
