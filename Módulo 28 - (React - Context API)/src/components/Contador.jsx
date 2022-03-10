import React, { useContext, useState } from 'react';
import { ContadorContext, ContadorProvider } from '../Context';

const Contador = (props) => {
  const [cont, set_cont] = useContext(ContadorContext)
  return ( 
    <div>
      <button onClick={() => {set_cont((estado) => estado + 1)}}>+</button>
      <button onClick={() => {set_cont((estado) => estado - 1)}}>-</button>
      <div>{cont}</div>
    </div>
   );
}
 
export default Contador