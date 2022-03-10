import { useSelector } from 'react-redux';

const Header = (props) => {
  const cont = useSelector((state) => {
    return state.counter
  })
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