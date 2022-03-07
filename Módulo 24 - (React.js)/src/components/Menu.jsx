import React from "react"
import "./Menu.css"

function Menu(props){
  return (
    <ul className='menu'>
        {props.links.map((link, index) => {
            return (
              <li key={index}>{link}</li>
            )
        })}
    </ul>
  )
  
}

export default Menu