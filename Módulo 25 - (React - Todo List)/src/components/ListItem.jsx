import React from 'react';
import Card from './Card';



function DoneText(props){
  if (props.done){
    return ("ON")
  }
  else {
    return ("OFF")
  }
}


const ListItem = (props) => {
  return ( 
            <li>
            <Card className={props.item.done ? "done item" : "item" }>
              {props.item.text}
              <div>
                <button onClick={() => {props.on_item_deleted(props.item)}}>Del</button>
                <button onClick={() => {props.on_done(props.item)}} className="donebtt"><DoneText done={props.item.done}/></button>
              </div>
            </Card>
            </li>    
          )
}
 
export default ListItem;