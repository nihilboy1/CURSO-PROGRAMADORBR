
// REDUCER
function list_reducer(state = [], action){
  switch (action.type){
    case "add_item":
      return [...state, action.payload]

    default:
      return state
  }
}

module.exports = {
  list_reducer
}
