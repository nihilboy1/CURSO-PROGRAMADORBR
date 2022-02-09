function media(n1, n2){
    var nota1 = n1
    var nota2 = n2
    var media = (n1 + n2) / 2
    return media
}
var a = media(5,10)
console.log(a)
console.log("-------------------")



var media = function (n1, n2) {
    return (n1 + n2) / 2
}
console.log(media(15,5))
console.log("-------------------")



var media = (n1, n2) => {
    return (n1 + n2) / 2
}

console.log(media(15,5))