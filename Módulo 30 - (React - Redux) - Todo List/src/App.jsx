import React, {useState} from 'react';
import {createStore} from "redux"
import {Provider} from "react-redux"
import List from './components/List';
import Modal from './components/Modal';
import TodoForm from './components/TodoForm';
import "./App.css"

import listreducer from "../src/redux/reducers/listreducer.js"

const SAVED_ITEMS = "saveditems"

function persist_state(state){
  localStorage.setItem(SAVED_ITEMS, JSON.stringify(state))
}

function load_state(){
  const actual_state = localStorage.getItem(SAVED_ITEMS)
  if (actual_state){
    return JSON.parse(actual_state)
  }
  else {
    return []
  }
}

const store = createStore(listreducer, load_state())

store.subscribe(() => {
    persist_state(store.getState())
})





const App = () => {
  const [show_modal, set_show_modal] = useState(false)

  function on_hide_modal(event){
    set_show_modal(false)

  }


  return ( 
    <div className='container'>
      <Provider store={store}>
        <header className='header'>
        <h1>Todo List</h1>
        <button className='addbutton' onClick={() => {set_show_modal(true)}}>
          +
        </button>
        </header>
      
        <List></List>
        <Modal show={show_modal} on_hide_modal={on_hide_modal}>
          <TodoForm on_hide_modal={on_hide_modal} ></TodoForm>
        </Modal>
      </Provider>
    </div>
   );
}

 
export default App;