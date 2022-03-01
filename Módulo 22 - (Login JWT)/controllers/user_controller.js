const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const validate = require("../controllers/validade_controller")



const user_controller = {
    register: async function(req, res) {
        const registro = await User.findOne({email:req.body.email})
        const x =  validate.register_validate(req.body)
        error = x.error.message

        if (registro){
            return res.status(400).send("Escolha outro email!")
        }

        if (error){
            console.log(x.error.message, "de dentro")
        }
 
        

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
        })

        try {
            const saved_user = await user.save()
            res.send("Usuário cadastrado com sucesso!")
            res.send(saved_user)
        }
        catch(error) {
            res.status(400).send(error)
        }
    },

    login: async function(req, res) {
        const {test} = validate.login_validate(req.body)
        if (test) {
            return res.status(400).send(test.message)
        }

        const registro = await User.findOne({email:req.body.email})
        if (!registro){
            return res.status(400).send("Email ou senha inválidos")
        }
        else {
            const password_and_user_match = bcrypt.compareSync(req.body.password, registro.password)
            if (password_and_user_match){
                const token = jwt.sign({id:registro.id, admin:registro.admin}, process.env.TOKEN_SECRET)
                res.header("auth-token", token)
                res.send("User connected")
            }
            else {
                return res.status(400).send("Email ou senha inválidos")
            }
        }
        
    }

}

module.exports = user_controller


