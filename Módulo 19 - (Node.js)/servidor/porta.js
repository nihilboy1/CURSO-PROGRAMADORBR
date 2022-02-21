const http = require("http")
let porta = 3000

http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type":"text/html"})
  response.end("<h1>Olá, mundo!</h1>")
}).listen(porta, (error) => {
  if(error){
      console.log(error)
  }
  else {
      console.log("Servidor aberto na porta", porta)
  }
})