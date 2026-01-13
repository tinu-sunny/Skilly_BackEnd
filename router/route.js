const express = require('express')

const userController= require('../controller/userController')
const chatcontroller =require('../controller/chatController')
const contactController = require('../controller/contactController')         
const adminController=require('../controller/adminController')
const studentController=require('../controller/studentController')
const multerConfig = require('../middlewares/multerMiddleware')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const roleMiddleware = require('../middlewares/roleMiddleware')
const route = express.Router()


// index page 
route.post("/register",userController.registerUser)
route.post('/login',userController.userlogin)
route.post('/contact',userController.contactreg)

route.post('/chat',chatcontroller.chat)
// common api calls
route.get('/active-user',jwtMiddleware,userController.activeuser)
// admin Path
route.get('/admin-user-management',jwtMiddleware,roleMiddleware('admin'),adminController.viewUsers)
route.get('/contact-admin-view',jwtMiddleware,roleMiddleware('admin'),adminController.contactViewAdmin)
route.post('/carrerfield-add',multerConfig.single('thumbnail'),adminController.carrerfieldAdd)
route.get('/carrerfield-admin-view' ,jwtMiddleware,roleMiddleware('admin'),adminController.carrerfieldAdminView)
route.put('/admin-user-statusupdate',jwtMiddleware,roleMiddleware('admin'),adminController.setUserActiveStatus)

// student path

route.get('/career-view',jwtMiddleware,roleMiddleware('student'),studentController.carrerfieldview)
route.post('/feedback-add-student',jwtMiddleware,roleMiddleware('student'),studentController.feedbackAddAPI)

module.exports=route