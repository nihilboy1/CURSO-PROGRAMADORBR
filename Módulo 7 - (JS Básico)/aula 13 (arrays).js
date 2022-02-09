// array é igual a lista

var vetor = new Array("Igor", "José", "Carlos")
console.log(vetor[0])
console.log("----------------------------")


var lista = ["Bleu", "fleu", "neu"]

console.log(lista)
console.log("----------------------------")


for (var i = 0; i < lista.length; i++){
    console.log(lista[i])
}
console.log("----------------------------")


var lista = ["xaxa", "xuxu", "xixi"]
for (var x in lista){
    console.log(lista[x])
}
console.log("----------------------------")


var lista = ["jaja", "jeje", "jiji"]
for (var x of lista){
    console.log(x)
}
console.log("----------------------------")
