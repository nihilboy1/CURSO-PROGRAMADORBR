// o reduce reduz todas as entradas de um array numa unica entrada

function novo_aluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novo_aluno("pedro", 15),
    novo_aluno("luiz", 28),
    novo_aluno("paula", 25),
    novo_aluno("beatriz", 21),
]
function idade_turma1(agregador, chave){
    return agregador + chave.idade
}

var x = alunos.reduce(idade_turma1, 0)
console.log(x)



// O primeiro parametro, recebe o contador, e o segundo, a chave do objeto.
function idade_turma(chave){
    var agreg = 0
    for (var loop = 0; loop <= chave.length; loop += 1){
        if (loop == chave.length){
            return agreg
        }
        else {
            agreg += chave[loop].idade
        }
    }
}

var a = idade_turma(alunos)
console.log(a)


