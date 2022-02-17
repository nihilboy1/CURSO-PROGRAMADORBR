let usuarios = ["adriano", "laura", "vitor"]



function inserir_usuario (nome, callback) {
    setTimeout(function push()
    {usuarios.push(nome), // primeira ação que será executada
    callback()} // segunda ação que será executada
    , 1500) // tempo de delay para a realização dessas ações
    
}

function listar_usuario () {
    console.log(usuarios)
}

inserir_usuario("pedro", listar_usuario)

