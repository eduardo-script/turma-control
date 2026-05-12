const fs = require("fs")
let alunos:string[] = []

function gerarArquivo(arquivo:string) {
  if(!fs.existsSync(arquivo)) {
    fs.writeFileSync(arquivo, "")
  }
}

function addAluno(nome:string, dataNascimento:string, telefone:string) {
  const id = alunos.length + 1
  const aluno = `${id};${nome};${dataNascimento};${telefone}`
  alunos.push(aluno)
  fs.appendFileSync("alunos.txt", `${alunos}\n`)
}

function listarAlunos(){
  const arquivo 

	for(let i:number = 0; i < alunos.length; i++) {
		console.log(alunos[i])
	}
}

function addNotas(idAluno: string, nota1: number, nota2: number,nota3: number){
  const posicaoAluno = Number(idAluno) - 1
  const aluno = alunos[posicaoAluno]
  alunos[posicaoAluno] = `${aluno};${nota1};${nota2};${nota3}`
}

export = { addAluno, listarAlunos, addNotas }
