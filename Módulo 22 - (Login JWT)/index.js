require("dotenv").config()
const express = require("express")
const app = express()
const user_router = require("./routes/user_router")
const admin_router = require("./routes/admin_router")
const mongoose = require("mongoose")

// VIEWS
app.set("view engine", "ejs")
app.set("views", "views")

// BANCO DE DADOS
mongoose.connect(process.env.MONGOOSE_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
    if (error){
    console.log(error)
    }
    else {
        console.log("Mongo connected")
    }
})


// ROTAS E CONTROLES
app.use("/user", express.json(), user_router)
app.use("/admin", express.json(), admin_router)


// PORTA
app.listen(process.env.GATE, () => {
    console.log(`Ouvindo a porta: `, process.env.GATE)
})