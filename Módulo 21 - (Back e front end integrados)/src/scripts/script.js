document.addEventListener("DOMContentLoaded", () => {
  update_posts()
})

function update_posts() {

    fetch("http://10.0.0.146:7070/all").then((res) => {
        return res.json()
    }).then((json) => {
        let post_elements = ""

        let posts = JSON.parse(json)
        posts.forEach((post) => {
            let post_element = `
                                <div class="muralbox" id=${post.id}>
                                    <div class="header">
                                        <h4>
                                            ${post.title}
                                        </h4>
                                    </div>
                                    <div class="body">
                                        <p>
                                            ${post.description}
                                        </p>
                                    </div>
                                </div>
                                `
        post_elements += post_element 
    })
        document.getElementById("posts").innerHTML = post_elements  
    })    
      
}


function novo_post(){
    let title = document.getElementById("titulo").value
    let description = document.getElementById("desc").value

    let post = {title, description}
    console.log(post)

    const options = {
        method: "POST",
        headers: new Headers({"content-type":"application/json"}),
        body: JSON.stringify(post)
    }

    fetch("http://10.0.0.146:7070/posts", options).then((res) => {
        update_posts()
        document.getElementById("desc").value = ""
        document.getElementById("titulo").value =""
    })
}