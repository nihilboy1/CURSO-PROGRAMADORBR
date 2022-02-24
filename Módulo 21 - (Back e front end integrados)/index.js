const cors = require("cors")
const express = require("express")
const posts = require("./model/posts")
const path = require("path")
const gate = 7070
const app = express()

const options = {
    origin: "http://localhost:7070"
}

app.use(cors(options))
app.use(express.json())
app.use(express.static(path.join(__dirname, '/src')))

app.set("view engine", "ejs")
app.set("views", "src/views")



app.get("/", (req, res) => {
    res.status(200).render("index.ejs")

    // res.json(JSON.stringify(posts))
})

app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.get_all()))
})

app.delete("/del/:id", (req, res) => {
    res.status(200)
    let id = req.params.id
    posts.delete_post(id)
    res.send("fim")

})

app.post("/posts", (req, res) => {
    let title = req.body.title
    let description = req.body.description
    posts.new_post(title, description)
    
    res.send("Post adicionado!")
})


app.listen(gate, () => {
  console.log(`Ouvindo a porta ${gate}`)
})



