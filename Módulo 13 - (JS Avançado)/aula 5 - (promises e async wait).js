let usuarios = ["adriano", "laura", "vitor"]



function inserir_usuario (nome) {
    let promise = new Promise(function(resolve, reject){
        setTimeout(function push(){
            usuarios.push(nome)
            let error = false
            if (!error){
                resolve()
            }
            else{
                reject({msg: "deu erro"})
            }
        }, 500)
    })
    return promise
}


function listar_usuario () {
    console.log(usuarios)
}

// inserir_usuario("pedro").then(listar_usuario)

async function exec() {
    await inserir_usuario("maria")
    listar_usuario()
}

exec()



