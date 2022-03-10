import React from 'react';
import { useDispatch } from 'react-redux';
import { delete_item, change_done } from '../redux/actions/listactions';
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
  const dispatch = useDispatch()
  return ( 
            <li>
            <Card className={props.item.done ? "done item" : "item" }>
              {props.item.text}
              <div>
                <button onClick={() => {dispatch(delete_item(props.item.id))}}>Del</button>
                <button onClick={() => {dispatch(change_done(props.item.id))}} className="donebtt">
                <DoneText done={props.item.done}/>
                </button>
              </div>
            </Card>
            </li>    
          )
}
 
export default ListItem;