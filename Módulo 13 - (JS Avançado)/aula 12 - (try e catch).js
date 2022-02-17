let a = ""

try {
    if (a == ""){
        throw "O nome não pode estar vazio"
    }
    console.log(a)
}
catch (error) {
    console.log("Houve um erro!", error)
}
finally {
    console.log("Boa noite!")
}



