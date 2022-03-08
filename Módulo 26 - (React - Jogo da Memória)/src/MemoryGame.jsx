import React, { useEffect, useState } from 'react';
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';
import game from "../src/game/game.js"

const MemoryGame = () => {
  const [game_over, set_game_over] = useState(false)
  const [cards, set_cards] = useState([])

  useEffect(() => {
    set_cards(game.create_cards_from_techs())
  },[])


  function restart(){
    game.clear_cards()
    set_cards(game.create_cards_from_techs())
    set_game_over(false)
  }

  function handle_flip(card){
    if (game.set_card(card.id)){
      if (game.second_card) {
        if (game.check_match()){
          game.clear_cards()
          if (game.check_game_over()){     
            set_game_over(true) 

              }
          }
          else {
            setTimeout(() => {
              // no match
              game.unflip_cards()
              set_cards([...game.cards])
            },1000)
        }
      }
    }
    set_cards([...game.cards])
  }

  return ( 
    <div>
      <GameBoard handle_flip={handle_flip} cards={cards}></GameBoard>
      <GameOver show={game_over} restart={restart}></GameOver>
    </div>
   );
}
 
export default MemoryGame;