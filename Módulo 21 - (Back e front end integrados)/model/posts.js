module.exports = {
    posts: [
        {
            "id":"458745" ,
            "title": "title",
            "description": "description",
        },
        {
            "id":"451745" ,
            "title": "titfle",
            "description": "descrfiption",
        }
    ],

    get_all() {
        return this.posts
    },

    new_post(title, description) {
        this.posts.push(
            {
                id: generate_id(),
                title: title,
                description: description
            }
        )
    },

    delete_post(id){
        let count = 0
        this.posts.forEach((post) => {
            console.log(post)
            count += 1
            if (post.id == id){
                this.posts.splice(count-1)
          }
        })

    }
}

function generate_id() {
    return Math.random().toString(36).substring(2,9)
}