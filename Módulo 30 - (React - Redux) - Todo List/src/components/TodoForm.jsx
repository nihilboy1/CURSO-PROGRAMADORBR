import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {add_item} from "../redux/actions/listactions.js"


function TodoForm(props){
  const [text, set_text] = useState("")
  const dispatch = useDispatch()

  
  function handle_change(event){
    let t = event.target.value
    set_text(t)
  }

  
  function add_item_e(event){
    event.preventDefault()
    if (text){
      dispatch(add_item(text))
      set_text("")
      props.on_hide_modal()
    }
    
  }
    return (
      <form>
        <input type="text" onChange={handle_change} value={text}></input>
        <button onClick={add_item_e}>Add</button>
      </form>
    )
}

export default TodoForm