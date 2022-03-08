

const room = window.location.pathname.replace(/\//g, "")

const socket = io(`http://localhost:7000/${room}`)

let user = null

socket.on("update_messages", (messages) => {
    update_messages_on_screen(messages)
})

function update_messages_on_screen(messages){
    const div_messages = document.querySelector("#messages")


    let list_messages = "<ul>"
    messages.forEach((message) => {
        list_messages += `<li>${message.user}: ${message.msg}</li>`
    })
    list_messages += "</ul>"

    div_messages.innerHTML = list_messages
}


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#message_form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()

        if (!user){
            alert("Defina um nome de usuário para poder mandar mensagens!")
            return
        }
        const message = document.forms["message_form_name"]["msg"].value
        socket.emit("new_message", {user: user, msg: message})
    })

    const user_form = document.querySelector("#user_form")
    user_form.addEventListener("submit", (event) => {
        event.preventDefault()
        user = document.forms["user_form_name"]["user"].value
        user_form.parentNode.removeChild(user_form)
    })
})