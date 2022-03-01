
const jwt = require("jsonwebtoken")


const auth_controller = {
    auth: function (req, res, next) {
        const token = req.header("auth-token")
        if (!token) {
            return res.status(401).send("Token de acesso não enviado")
        }
        else {
            try {
                const user_verified = jwt.verify(token, process.env.TOKEN_SECRET)
                req.user = user_verified
                next()
            }
            catch (error){
                res.status(401).send("O Token de acesso enviado é inválido")
            }
            
        }
    }
}

module.exports = auth_controller