const FRONT = "card_front"
const BACK = "card_back"

let techs = [
    "bootstrap",
    "css",
    "electron",
    "firebase",
    "html",
    'javascript',
    "jquery",
    "mongo",
    "node",
    "react"
]


let cards = null

function start_game(){
    cards = create_cards_from_techs(techs)
    shuffle_cards(cards)
    console.log(cards)
}

function shuffle_cards(cards){
    let current_index = cards.length
    let random_index = 0

    while (current_index !== 0) {
        random_index = Math.floor(Math.random() * current_index)
        current_index--

        [cards[random_index], cards[current_index]] = [cards[current_index], cards[random_index]]

    }
    
}

function create_cards_from_techs(techs){
    let cards = []
    for (let tech of techs){
        cards.push(create_pair_from_tech(tech))
    }
    return cards.flatMap((a) => {return a})
}

function create_pair_from_tech(tech){
    return [
        {
            id:create_id_with_tech(tech),
            icon: tech,
            flipped: false
        },
        {
            id:create_id_with_tech(tech),
            icon: tech,
            flipped: false
        }
    ]
}

function create_id_with_tech(tech){
    return tech + parseInt(Math.random() * 1000)
}

start_game()