function novo_aluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novo_aluno("Pedro", 15),
    novo_aluno("João", 25),
    novo_aluno("Maria", 12),
    novo_aluno("Paula", 21),
]


function menos_de_20(itens_do_array){
    // essa função está sendo especificamente para ser passada dentro de um filter
    return itens_do_array.idade < 20
}

let com_menos_de_20 = alunos.filter(menos_de_20)
// o filter vai percorrer o iteravel alunos, e vai enviar pra dentro da variavel, apenas os objetos que tenham sido retornados como true pela função
console.log(com_menos_de_20)