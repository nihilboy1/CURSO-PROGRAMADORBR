/*
function criar_aluno(nome, n1, n2){
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function() {
            return (this.nota1 + this.nota2) / 2
        }
    }
}

var turma = [
    criar_aluno("Pedro", 1, 2)
]

turma.forEach(function (item) {
    console.log(item)
})

var aluno = turma[0]
console.log(aluno)
console.log(aluno.media())
*/

function aluno(nome, n1, n2) {
    this.nome = nome
    this.nota1 = n1
    this.nota2 = n2
    this.media = function() {
        return (this.nota1 + this.nota2) / 2
    }
}

var a = new aluno("igor", 7, 6)
var b = new aluno("maria", 9, 10)

console.log(b.media())



