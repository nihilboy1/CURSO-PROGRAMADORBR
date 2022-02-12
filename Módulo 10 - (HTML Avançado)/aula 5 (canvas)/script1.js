let tela = document.getElementById("tela")
let ctx = tela.getContext("2d")
/* ctx.moveTo(0,0)
ctx.lineTo(250,250)
ctx.lineTo(500,0)
ctx.lineWidth = 2
ctx.strokeStyle = "red"
ctx.stroke()
*/
/*
ctx.rect(10,10,100,200)

ctx.fillStyle = "blue"
// ctx.fillRect(10,10,100,200)
ctx.lineWidth = 5
ctx.strokeStyle = "red"
// ctx.strokeRect(10,10,100,200)


ctx.fill()
ctx.stroke()

ctx.clearRect(20,20,30,30)
*/

// ctx.beginPath() pra informar que eu to iniciando um novo caminho

let x = 250
let y = 250
let raio = 100

let inicio = 0
let fim = 2 * Math.PI

ctx.beginPath()
ctx.strokeStyle = "red"
ctx.fillStyle = "Blue"
ctx.arc(x, y, raio, inicio, fim)

ctx.fill()
ctx.stroke()