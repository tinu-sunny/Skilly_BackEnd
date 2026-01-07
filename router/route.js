const express = require('express')

const userController= require('../controller/userController')
const chatcontroller =require('../controller/chatController')
const contactController = require('../controller/contactController')
const adminController=require('../controller/adminController')
const multerConfig = require('../middlewares/multerMiddleware')
const route = express.Router()

route.post("/register",userController.registerUser)
route.post('/login',userController.userlogin)
route.get('/admin-user-management',userController.viewUsers)
route.post('/chat',chatcontroller.chat)
route.post('/contact',userController.contactreg)
route.get('/contact-admin-view',adminController.contactViewAdmin)
route.post('/carrerfield-add',multerConfig.single('thumbnail'),adminController.carrerfieldAdd)

module.exports=route