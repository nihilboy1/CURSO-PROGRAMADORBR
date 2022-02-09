// tipo dicionarios

var aluno = { 
    nome:"Igor",
    notas:[7.5,5.0]

}

console.log(aluno["notas"][0])
console.log(aluno.notas[0])

// Adicionar valores novos
aluno.matricula = 12345
aluno["sobrenome"] = "Oliveira"
console.log(aluno)
console.log("---------------------")

// Adicionar chaves novas
var nova_prop = "last_name"
aluno[nova_prop] = "Silva"
console.log(aluno)

console.log("---------------------")
var alunx = new Object()

alunx.nome = "João"

console.log(alunx)



