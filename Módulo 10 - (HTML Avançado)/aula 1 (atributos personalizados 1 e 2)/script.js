let image = document.getElementById("like")
function func() {
    // image.src = "imagens/down.png" // jeito 1 de mudar o src
    image.setAttribute("src", "imagens/down.png") // jeito 2 de mudar o src
}
image.addEventListener("click", func)    
// image.getAttribute("src") com isso eu consigo pegar o valor que está dentro do atributo


let lista = document.getElementById("lista")
var quantos_li = parseInt(lista.getAttribute("quantos_li"))
var quantos = parseInt(lista.dataset.quantos_li)


var conteudo = ""
for (x = 1; x <= quantos; x+=1) {
    conteudo += `<li> Conteudo: ${x} </li>`
}

lista.innerHTML = conteudo