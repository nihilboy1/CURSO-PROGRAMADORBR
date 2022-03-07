import React, { useState } from 'react';
import Card from './Card';

const Modal = (props) => {

  function hide_modal(event){
    let target = event.target
    if (target.id === "modal"){
      props.on_hide_modal(false)
    }
  }

  return ( 
    <div id="modal" onClick={hide_modal} className={props.show ? "modal": "modal hidemodal"}>
      <Card className="cardmodal">
        {props.children}
      </Card>
    </div>
   );
}
 
export default Modal;