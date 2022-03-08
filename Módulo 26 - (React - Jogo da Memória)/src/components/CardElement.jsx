import React from 'react'

export default function CardElement(props) {
  return (
    <div onClick={() => {
       props.handle_flip(props.card)
    }} id={props.card.id} className={`card ${props.card.flipped  ? "flip" : ""}`} >
      <div className='card_front'>
        <img src={`assets/imagens/${props.card.icon}.png`} alt={props.card.icon} />
      </div>
      <div className='card_back'>
        {"</>"}
      </div>
    </div>
  )
}
