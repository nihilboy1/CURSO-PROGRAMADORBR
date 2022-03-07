import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
  return ( 
    <ul>
    {props.items.map((item) => {
          return (
            <ListItem item={item} key={item.id} on_done={props.on_done} on_item_deleted={props.on_item_deleted}></ListItem>
          )
        })}
    </ul>
   );
}
 
export default List;