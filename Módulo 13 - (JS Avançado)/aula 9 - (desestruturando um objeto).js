var aluno = {
    matricula: 1234,
    nome: "joão",
    tel: 84987055995,
    cidade:"Barra do piraí"
}

// assim eu consigo extrair apenas a chave que eu quero de dentro do objeto
var {matricula} = aluno


// assim eu copio todo o objeto
var {...copy} = aluno


// assim eu separo as variaveis, colocando os especificos nos locais certos, o resto na variavel genérica
var {matricula, ...copy} = aluno



