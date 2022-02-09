// && === "e"
// || === "ou"
// ! === "not"


var idade1 = 28
var maior20 = idade1 > 20
var menor30 = idade1 < 30
console.log(menor30 && maior20)

console.log("-----------------")

var idade2 = 10
var menor10 = idade2 <= 10
var maior65 = idade2 >= 65
console.log(menor10 || maior65)

console.log("-----------------")

var idade3 = 20
var maior20 = idade3 >= 20
var menor30 = ! maior20
console.log(menor30)
