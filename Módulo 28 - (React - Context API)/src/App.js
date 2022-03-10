import './App.css';
import Contador from './components/Contador';
import Header from './components/Header';
import { ContadorProvider } from './Context';

function App() {
  return (
    <div className='app'>
      <ContadorProvider>
        <Header></Header>
        <Contador></Contador>
      </ContadorProvider>
    </div>
  )
}
export default App;
