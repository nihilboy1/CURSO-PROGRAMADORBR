const Pessoa = require("./Pessoa")

class Aluno extends Pessoa{
  constructor(name, age, turma){
    super(name, age) // esse super, chama o que tiver sido passado pra classe imediatamente acima dele
    this.turma = turma
  }
  greetings(){
    console.log("Olá, blz? Meu nome é", this.name, "Minha turma é a", this.turma)
  }

}

module.exports = Aluno
