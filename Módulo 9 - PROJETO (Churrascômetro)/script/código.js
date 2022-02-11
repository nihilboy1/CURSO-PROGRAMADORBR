

function coletar() {
    var elemento = document.getElementById("adultos")
    var adultos = parseFloat(elemento.value)
    if (isNaN(adultos)){
        adultos = 0}
   
    var elemento = document.getElementById("criancas")
    var criancas = parseFloat(elemento.value) / 2
    if (isNaN(criancas)){
        criancas = 0}
  
    var elemento = document.getElementById("duracao")
    var duracao = parseFloat(elemento.value)
    if (isNaN(duracao)){
        duracao = 0}
 
    if (duracao >= 6) {
        var carne = (adultos + criancas) * 600
        var cerveja = adultos * 2000
        var refri = (adultos + criancas) * 1500
    }
    else {
        var carne = (adultos + criancas) * 400
        var cerveja = adultos * 1200
        var refri = (adultos + criancas) * 1000
    }
           
    




    var elemento = document.getElementById("resultado")
    elemento.innerHTML = 
    "<p> Carne: " + carne / 1000 + " Kg</p>" + 
    "<p> Cerveja: " + cerveja + " ML</p>" + 
    "<p> Refrigerante / Água: " + refri + " ML</p>"

    


}

