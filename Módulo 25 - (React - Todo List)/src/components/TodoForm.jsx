import React, { useState } from 'react';


function TodoForm(props){
  const [text, set_text] = useState("")
  
  function handle_change(event){
    let t = event.target.value
    set_text(t)
  }

  
  function add_item(event){
    event.preventDefault()
    if (text){
      props.on_add_item(text)
      set_text("")
    }
    
  }
    return (
      <form>
        <input type="text" onChange={handle_change} value={text}></input>
        <button onClick={add_item}>Add</button>
      </form>
    )
}

export default TodoForm