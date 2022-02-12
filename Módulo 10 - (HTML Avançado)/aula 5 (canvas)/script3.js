let tela = document.getElementById("tela")
let ctx = tela.getContext("2d")
let img = new Image()
img.src = "./half.png"

img.onload = desenhas_img
function desenhas_img() {
    ctx.drawImage(this, 20,20, this.naturalWidth / 2 , this.naturalHeight / 2)
}
