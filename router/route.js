const express = require('express')

const userController= require('../controller/userController')
const chatcontroller =require('../controller/chatController')
const contactController = require('../controller/contactController')         
const adminController=require('../controller/adminController')
const studentController=require('../controller/studentController')
const multerConfig = require('../middlewares/multerMiddleware')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const roleMiddleware = require('../middlewares/roleMiddleware')
const workingController = require('../controller/workingController')
const { jobAdd, jobViewCompany, jobeditcompany, jobaplicationstatus, jobdlete } = require('../controller/CompanyController')
const route = express.Router()


// index page 
route.post("/register",userController.registerUser)
route.post('/login',userController.userlogin)
route.post('/googlelogin',userController.googlelogin)
route.post('/googlelogin-datasave',jwtMiddleware,userController.googlelogindatasave)
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
route.get('/admin-feedback-view',jwtMiddleware,roleMiddleware('admin'),adminController.adminfeedbackview)
route.patch('/admin-carrerupdate',multerConfig.single('thumbnail'),jwtMiddleware,roleMiddleware('admin'),adminController.carrerfieldupdate)
route.delete('/admin-carrerfield-delete',jwtMiddleware,roleMiddleware("admin"),adminController.carrerfieldDelete)


// student path

route.get('/career-view',jwtMiddleware,roleMiddleware('student'),studentController.carrerfieldview)
route.post('/feedback-add-student',jwtMiddleware,roleMiddleware('student'),multerConfig.single('uploadImg'),studentController.feedbackAddAPI)

route.get('/student-job-view',jwtMiddleware,roleMiddleware('student'),studentController.studentjobsview)

// working path

route.post('/post-add-working',jwtMiddleware,roleMiddleware('working'),multerConfig.single('post'),workingController.post)
route.get('/post-view-working',jwtMiddleware,roleMiddleware('working'),workingController.postview)

// company paths

route.post('/job-add',jwtMiddleware,roleMiddleware('company'),jobAdd)
route.get('/job-view-company',jwtMiddleware,roleMiddleware('company'),jobViewCompany)
route.patch('/job-edit-company',jwtMiddleware,roleMiddleware('company'),jobeditcompany)
route.patch('/job-aplication-company-close',jwtMiddleware,roleMiddleware('company'),jobaplicationstatus)
route.delete('/job-company-delete',jwtMiddleware,roleMiddleware('company'),jobdlete)



module.exports=route