function calc_media (n1, n2) {
    return (n1 + n2) / 2
}


var aluno = {
    nome: "Igor",
    notas: [7,8],

    media: calc_media // aqui eu to só instanciando a func pra dentro da variavel
}

console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]))

console.log("------------------------------------")
// "this" é tipo "self"


// Aqui eu to criando uma função especifica pra ser chamada dentro do objeto
function calc_media_2() {
    return (this.notas[0] + this.notas[1]) / 2
}

var aluno = {
    nome: "Pedro",
    notas: [7,11],

    media: calc_media_2 // aqui eu to só instanciando a func pra dentro da variavel
}
console.log(aluno.nome)
console.log(aluno.media())