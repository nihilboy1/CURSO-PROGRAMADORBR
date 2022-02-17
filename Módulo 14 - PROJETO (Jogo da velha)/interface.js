document.addEventListener("DOMContentLoaded", () => {
    let quads = document.querySelectorAll(".quad")
    let btn = document.getElementById('btn')
    btn.addEventListener("click", reset)
    quads.forEach((quad) => {quad.addEventListener("click", clicar)})
})



function reset() {
    window.location.reload()
}



function clicar(event){
    if(action(event.target.id) == true){
        setTimeout(() => {alert("Fim de jogo! O vencedor foi o jogador: " + player_turn)},30)
    }
    update_quad(event.target.id)
}


function update_quad(position) {
    let quad = document.getElementById(position.toString())
    let mark = board[position]
    quad.innerHTML = `<div class='${mark}'></div>`

}

