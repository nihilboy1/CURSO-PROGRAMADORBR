import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Contador = (props) => {
  const cont = useSelector((state) => {
    return state.counter
  })
  const dispatch = useDispatch()
  return ( 
    <div>
      <button onClick={() => {dispatch({type: 'INCREMENT'})}}>+</button>
      <button onClick={() => {dispatch({type: 'DECREMENT'})}}>-</button>
      <div>{cont}</div>
    </div>
   );
}
 
export default Contador