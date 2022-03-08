const express = require("express")
const app = express()
const path = require("path")
const socketIO = require("socket.io")

app.set("view engine", "ejs")
app.set("views", "public")


app.get("/", (req, res) => {
  res.render("home.ejs")
})

app.use("/chat1", express.static(path.join(__dirname, "public")))
app.use("/chat2", express.static(path.join(__dirname, "public")))



const server = app.listen(7000, () => {
    console.log("Runnin on 7000")
})
const messages = {chat1: [], chat2: []}
const io = socketIO(server)

const chat1 = io.of("/chat1").on("connection", (socket) => {
    console.log("New Connection")

    socket.emit("update_messages", messages.chat1)

    socket.on("new_message", (data) => {
        messages.chat1.push(data)
        chat1.emit("update_messages", messages.chat1)
    })
    
})

const chat2 = io.of("/chat2").on("connection", (socket) => {
    socket.emit("update_messages", messages.chat2)

    console.log("New Connection")

    socket.on("new_message", (data) => {
        messages.chat2.push(data)
        chat2.emit("update_messages", messages.chat2)
    })
    
})




