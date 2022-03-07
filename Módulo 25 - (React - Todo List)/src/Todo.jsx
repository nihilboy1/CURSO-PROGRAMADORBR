import React, { useEffect, useState } from 'react';
import List from './components/List';
import Item from './components/item';
import Modal from './components/Modal';
import TodoForm from './components/TodoForm';
import "./Todo.css"

const SAVED_ITEMS = "saveditems"


const Todo = () => {
  const [items, set_items] = useState([])
  const [show_modal, set_show_modal] = useState(false)


  useEffect(() => {
    let saved_items = JSON.parse(localStorage.getItem(SAVED_ITEMS))
    if (saved_items) {
      set_items(saved_items)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
  }, [items])

  function on_add_item(text){
    let objct_item = new Item(text)
    set_items([...items, objct_item])
    
  }

  function on_item_deleted(item){
    let filtered_items = items.filter((x) => {
      item.done = true
      return x.id !== item.id
    })
    set_items(filtered_items)
  }

  function on_done(item){
    let updated_items = items.map((x) => {
        if (x.id === item.id){
          x.done = !x.done
        }
        return x
    })
    set_items(updated_items)
  }

  
  function on_hide_modal(event){
    set_show_modal(false)

  }


  return ( 
    <div className='container'>
      <header className='header'>
      <h1>Todo List</h1>
      <button className='addbutton' onClick={() => {set_show_modal(true)}}>
        +
      </button>
      </header>
     
      <List on_item_deleted={on_item_deleted} on_done={on_done} items={items}></List>
      <Modal show={show_modal} on_hide_modal={on_hide_modal}>
        <TodoForm on_add_item={on_add_item}></TodoForm>
      </Modal>
    </div>
   );
}

 
export default Todo;