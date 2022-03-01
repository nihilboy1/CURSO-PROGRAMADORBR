const express = require("express")
const socketIO = require("socket.io")
const app = express()


app.use("/", express.static("./public"))









const server = app.listen(5000, () => {
    console.log("Rodando na porta 5000")
})

const io = socketIO(server)
io.on("connection", (socket) => {
    console.log("New connection")
    const random = Math.random()
    console.log(random)


    socket.emit("1", {msg: `Backend: Iae, frontend, blz? ${random}`,})
    io.emit("1", {msg: `Backend: Mensagem padrão para todos`})
    socket.broadcast.emit("1", {msg: `Backend: broadcast? ${random}`,})


    socket.on("2", (data) => {
        console.log(data.msg)
    })
})