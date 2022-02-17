function novo_aluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novo_aluno("Pedro", 15),
    novo_aluno("João", 25),
    novo_aluno("Maria", 12),
    novo_aluno("Paula", 21),
]

function nome_idade(x) {
    return x.nome + " tem " + x.idade + " anos"
}
console.log(alunos.map(nome_idade))

// o map me permite passar uma função pra cada item do iteravel, e talbém alterar eles, retornando uma string no final