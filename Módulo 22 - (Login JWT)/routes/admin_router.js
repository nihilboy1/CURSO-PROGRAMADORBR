const express = require("express")
const admin_controller = require("../controllers/admin_controller")
const admin_router = express.Router()
const auth_controller = require("../controllers/auth_controller")

admin_router.get("/", auth_controller.auth, admin_controller.renderizar)


module.exports = admin_router