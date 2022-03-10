import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';

const List = (props) => {
  const items = useSelector((state) => {
    return state
  })
  return ( 
    <ul>
    {items.map((item) => {
          return (
            <ListItem item={item} key={item.id}></ListItem>
          )
        })}
    </ul>
   );
}
 
export default List;