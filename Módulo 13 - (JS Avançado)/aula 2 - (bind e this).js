
function animalspeak () {
    console.log(this.sound)
} 

let dog = {
    sound: "Au, Au",
    speak: animalspeak
}

dog.speak()


// dessa forma, eu consigo informar qual o "this que vai ser chamado dentro da função, mesmo do lado de fora"
let binded_function = animalspeak.bind(dog)
binded_function()



