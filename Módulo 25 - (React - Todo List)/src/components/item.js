class Item {
  static last_id = 0

  constructor(text){
    this.id = Item.last_id++
    this.text = text
    this.done = false
  }
}

export default Item