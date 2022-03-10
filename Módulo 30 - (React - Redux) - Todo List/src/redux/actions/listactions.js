import Item from "../../components/item";


export function add_item(txt){
  const item = new Item(txt)
  return {type: "add_item", payload:item}

}


export function delete_item(id){
  return {type: "delete_item", payload:id}
}

export function change_done(id){
  return {type: "change_done", payload: id}
}

 