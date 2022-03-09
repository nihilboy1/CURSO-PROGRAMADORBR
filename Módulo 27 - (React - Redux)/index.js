// IMPORTAÇÃO DO MÓDULO
const redux = require("redux")

// INSTÂNCIAS
const create_store = redux.createStore
const combine_reducer = redux.combineReducers



// --- FUNCIONAMENTO


// IMPORTANDO ACTIONS
const {decrement_action, increment_action} = require("./actions/Counter_Actions")
const {add_item_action} = require("./actions/List_Actions")

// IMPORTANDO REDUCERS
const {counter_reducer} = require("./reducers/Counter_Reducer")
const {list_reducer} = require("./reducers/List_Reducer")

// JUNTANDO OS REDUCERS
const all_reducers = combine_reducer(
  {
    counter: counter_reducer,
    list: list_reducer
  }
)

// CRIANDO A STORE (O LOCAL ONDE VÃO FICAR TODOS OS MEUS REDUCERS, E TAMBÉM MEUS ESTADOS) // A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.
const store = create_store(all_reducers)


// LENDO UM OU MAISESTADO
console.log(store.getState().list)

// MONITORANDO AS ALTERAÇÕES NA LOJA
store.subscribe(() => {
    console.log(store.getState().counter)
})


// ENVIANDO UMA AÇÃO PARA O REDUCER, PARA O REDUCER MEXER NO ESTADO
store.dispatch(add_item_action("Imemrmadksad"))
