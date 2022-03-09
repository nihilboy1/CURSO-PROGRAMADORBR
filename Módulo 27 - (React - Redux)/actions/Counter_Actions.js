// AÇÃO

const increment_action = (value) => {
  return {type: "increment", payload: value || 0}
}
const decrement_action = (value) => {
return {type: "decrement", payload: value || 0}
}


module.exports = {
  increment_action,
  decrement_action
}