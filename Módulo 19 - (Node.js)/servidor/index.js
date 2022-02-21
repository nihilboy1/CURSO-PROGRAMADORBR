const http = require("http")
const url = require("url")
const fs = require("fs")
let porta = 3000

function handle_file (req, res, callback) {
  let path = (url.parse(req.url)).pathname
  let file_name = "../servidor" + path
  
  fs.readFile(file_name, (error, data) => {
    if (error){

        if (callback){
          if (!callback(req, res)){
            res.writeHead(404, {"Content-Type": "text/html;charset=utf-8"})
            res.end("<h1> Página não encontrada </h1>")
          }
        } 
    }
    else {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(data)
        res.end()
    }
  })
}


function handle_request (req, res) {
  let path = (url.parse(req.url)).pathname

  let method = req.method
  console.log(method)
  if (method == "PUT") {
    res.writeHead(404, {"Content-Type": "text/html;charset=utf-8"})
  }

  if (path == "/teste"){
    res.end("teste")
    return true
  }
  return false
}


http.createServer((req, res, hand) => {
  handle_file(req, res, handle_request)
}).listen(porta, (error) => {
  if(error){
      console.log(error)
  }
  else {
      console.log("Servidor aberto na porta", porta)
  }
})



/*


método get apenas serve para leitura

o post adiciona algo ao servidor

o put adiciona, mas sobrescreve

o delete deleta

*/
