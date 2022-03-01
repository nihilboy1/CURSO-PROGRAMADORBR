


const admin_controller = {
    renderizar: function(req, res){
        if (req.user.admin){
            res.render("admin_views/index.ejs")
        }
        else{
            res.status(400).send("Esse usuário não é um administrador!")
        }
        
    }
}

module.exports = admin_controller
