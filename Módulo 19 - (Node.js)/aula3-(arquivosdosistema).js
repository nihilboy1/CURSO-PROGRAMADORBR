let fs = require("fs")

fs.writeFile("teste.txt", "hello", (error) => {
  if (error){
      console.log(error)
  }
  else {
      console.log("Arquivo criado com sucesso!")
  }
})


// fs.appendFile concatena mais texto

// fs.unlink apaga o arquivo

//fs.rename renomeia o arquivo

// fs.readFile lê o arquivo

fs.readFile("teste.txt", "UTF8", (error, data) => {
    if (error){
        console.log(error)
    }
    else {
        console.log(data)
    }
  })

