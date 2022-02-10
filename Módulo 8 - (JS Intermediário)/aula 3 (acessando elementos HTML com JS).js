var a = document.getElementById("p1")
document.getElementsByClassName()
    // nesse da classe posso abrir um for e pegar o elemento desejado dentro do array que ele retorna
document.getElementsByName()
document.getElementsByTagName()
a.textContent = "oi"
console.log(a.textContent)



// ------------------------------
a.innerText // me retorna o texto visivel do html

a.textContent // me mostra todo o conteudo do html da tag seleciona

a.innerHTML // é o unico com o qual eu consigo inserir tags de fato, e também me mostra o conteudo da tag

//também é possivel modificar atributos e tudo mais, usando código
a.style.backgroundColor = "red"