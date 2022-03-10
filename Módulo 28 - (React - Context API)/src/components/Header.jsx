import React, { useContext } from 'react';
import { ContadorContext } from '../Context';

const Header = (props) => {
  const [cont, set_cont] = useContext(ContadorContext)
  return ( 
    <div className='header'>
      <h3>
        Contador
      </h3>
      <div>
        {cont}
      </div>
    </div>
   );
}
 
export default Header;