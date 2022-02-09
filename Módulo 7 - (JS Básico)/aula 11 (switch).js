var nota1 = 10
var nota2 = 3

var media = (nota1 + nota2) / 2

if (media >= 9) {
    conceito = "ÓTIMO"
}

else if (media >= 7.5) {
    conceito = "BOM"
}

else if (media >= 6) {
    conceito = "REGULAR"
}

else {
    conceito = "REPROVADO"
}

switch(conceito) {
    case "ÓTIMO":
        console.log("Você passou com rendimento ÓTIMO! Sua média: " + media)
        break
    case "BOM":
        console.log("Você passou com rendimento BOM! Sua média: " + media)
        break
    case "REGULAR":
        console.log("Você passou com rendimento REGULAR! Sua média: " + media)
        break
    case "REPROVADO":
        console.log("Você foi reprovado! Sua média: " + media)
        break

    default:
        console.log("Deu em nada")
    
}