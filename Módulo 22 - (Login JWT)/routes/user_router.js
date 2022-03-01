const express = require("express")
const user_controller = require("../controllers/user_controller")
const user_router = express.Router()


user_router.post("/login", user_controller.login)
    
user_router.post("/register",user_controller.register)

module.exports = user_router