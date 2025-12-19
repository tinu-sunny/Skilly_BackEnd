const express = require('express')

const userController= require('../controller/userController')

const route = express.Router()

route.post("/register",userController.registerUser)

module.exports=route