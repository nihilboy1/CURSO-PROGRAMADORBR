import './App.css';
import Contador from './components/Contador';
import Header from './components/Header';
import {createStore, combineReducers} from "redux"
import contador_reducer from './reducers/ContadorReducer';
import {Provider} from "react-redux"






function App() {
  const all_reducers = combineReducers(
    {
      counter: contador_reducer
    }
  )
  const store = createStore(all_reducers)

  return (
    <div className='app'>
      <Provider store={store}>
        <Header></Header>
        <Contador></Contador>
      </Provider>
    </div>
  )
}
export default App;
