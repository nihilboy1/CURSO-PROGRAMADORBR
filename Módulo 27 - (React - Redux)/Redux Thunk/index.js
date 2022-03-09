const {createStore, applyMiddleware} = require("redux")
const thunk = require("redux-thunk").default
const fetch = require('cross-fetch')




const initial_state = [ { id: 0, title: "tarefa", completed: false}]

const add_item = (item) => {
    return {
      type: "add_item",
      payload: item
    }
}

const load_item_and_add = () => {
    return (dispatch) => {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(json => {dispatch(add_item(json))
    })
    }
}

const list_reducer = (state = initial_state, action ) => {
    switch(action.type) {
      case "add_item":
        return [...state, action.payload
        ]
      default:
        return state
    }

}

const store = createStore(list_reducer, applyMiddleware(thunk))

console.log(store.getState())

store.dispatch(load_item_and_add())
store.subscribe(() => {
    console.log(store.getState())
})