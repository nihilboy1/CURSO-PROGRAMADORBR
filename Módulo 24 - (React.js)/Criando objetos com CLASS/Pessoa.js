
class Pessoa {
  constructor(name, age){
    this.name = name
    this.age = age
  }

  greetings() {
    console.log("Olá, blz? Meu nome é", this.name)
  }
}

module.exports = Pessoa