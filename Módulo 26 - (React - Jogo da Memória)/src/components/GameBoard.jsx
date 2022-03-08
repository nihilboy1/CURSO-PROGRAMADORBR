import React from 'react'
import CardElement from './CardElement'

export default function GameBoard(props) {
  return (
    <div id="game_board">
      {props.cards.map((card, index) => {
          return (
            <CardElement handle_flip={props.handle_flip} key={index} card={card}></CardElement>
          )
      })}
    </div>
  )
}
