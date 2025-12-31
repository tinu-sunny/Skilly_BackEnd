const express = require('express')

const userController= require('../controller/userController')

const route = express.Router()

route.post("/register",userController.registerUser)
route.post('/login',userController.userlogin)
route.get('/admin-user-management',userController.viewUsers)

module.exports=route