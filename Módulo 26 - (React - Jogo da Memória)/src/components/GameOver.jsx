import React, { Fragment } from 'react'

export default function GameOver(props) {
  return (
    props.show ?
    <div id="game_over">
        <div>
            Parabéns! Você completou o jogo!
        </div>
        <button id="restart" onClick={props.restart}>Jogar novamente</button>
    </div>
    :
    <Fragment></Fragment>
  )
}
