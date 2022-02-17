// quando eu atribuo um array ou um objeto a uma variavel, ele vai pra dentro dela apenas como referencia, e toda alteração que eu faço na referencia, afeta o objeto principal



// eu posso fazer o meu array se tornar uma cópia assim:
let a  = ["Igor","Ana","Maria","Pedro",]
let b = a.slice() // se eu passar o slice sem parametros, ele copia o array inteiro
let c = [...a] // assim também eu consigo uam cópia


// copiando um objeto:
let x = {nome:"igor", idade:"15"}

let z = Object.assign({}, x) // assim eu coloco meu objeto dentro de um objeto novo e depois dentro da variavel
let y = {...x} // assim também eu consigo uam cópia


/// o spread operator ... cria um objeto/array novo baseado no antigo, e eu posso passar mais de um valor pra mesma variavel
