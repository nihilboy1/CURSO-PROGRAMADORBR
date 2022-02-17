let board = ["", "", "", "", "", "", "", "", ""]

let player_turn = 0
let jogadas = 0

let mark = ["shield", "sword"]
game_over = false

let win_states = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


function action(position){
    if (game_over) {
        return true
    }
    if (board[position] == ""){
        board[position] = mark[player_turn]

        game_over = is_win()

        if (game_over == false) {
            player_turn = (player_turn == 0) ? 1 : 0
            jogadas += 1
            if (jogadas == 9){
                setTimeout(() => {window.alert("DEU ZEBRA! Resete o jogo!")},30)
                
            }
        } 
    }
    return game_over
}


function is_win(){
    for (let i = 0; i < win_states.length; i+=1) {
        let seq = win_states[i]

        let pos0 = seq[0]
        let pos1 = seq[1]
        let pos2 = seq[2]

        if (board[pos0] == board[pos1] && board[pos0] == board[pos2] && board[pos0] != ""){
            return true
        }
    }
        return false
}

