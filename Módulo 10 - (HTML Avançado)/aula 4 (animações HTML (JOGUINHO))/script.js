let pop = document.getElementById("pop")
var comandos = document.getElementById("control")

var y = 0
var x = 0
function control() {
    if (comandos.value == "w"){
        y -= 10
        var move_top = y + "px"
        pop.style.top = move_top
        comandos.value = ""
    }
    if (comandos.value == "s"){
        y += 10
        var move_bot = y + "px"
        pop.style.top = move_bot
        comandos.value = ""
    }
    if (comandos.value == "a"){
        x -= 10
        var move_bot = x + "px"
        pop.style.left = move_bot
        comandos.value = ""
    }
    if (comandos.value == "d"){
        x += 10
        var move_bot = x + "px"
        pop.style.left = move_bot
        comandos.value = ""
    }

}

