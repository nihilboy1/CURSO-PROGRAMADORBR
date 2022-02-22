var express = require("express")
var APP = express()
var body_parser = require("body-parser")
var aluno = require("../myapp/routes/alunos.js")

APP.use(express.urlencoded({ extended: true }))


APP.use("/alx", aluno)

APP.get("/", (req, res) => {
  res.send("Olá, mundo!")
})


APP.listen(3000, () => {
  console.log("Server rodando na porta 3000")
})


