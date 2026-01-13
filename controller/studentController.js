const carrerfield =require('../models/carrerfieldModel')
const feedbacks = require('../models/feedbacks')


// carree field view  
exports.carrerfieldview = async (req,res)=>{

    try{
        const data = await carrerfield.find()
        res.status(200).json({message:"carrerfields",data})
    }
    catch(err){
        res.status(400).json({message:"error",err})
    }
}


// feedbackadd  

exports.feedbackAddAPI = async(req,res)=>{
    const {feedbacktype,rating,status,message,email}=req.body

    const{userMail,role}=req.payload
    try{
        const feedback = new feedbacks({feedbacktype,rating,status,message,email,usertype:role})
        await feedback.save()
        res.status(200).json({message:"feedback Add succesfully",feedback})
    }
    catch(err){
        res.status(400).json({message:"Error please try after  some time ",err})
    }
}