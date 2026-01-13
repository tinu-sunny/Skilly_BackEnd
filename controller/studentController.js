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
    const {feedbacktype,rating,status,message,uploadImg}=req.body
// const  image = req.file.file 
console.log("hi",req.files);

const image = req.file? req.file.filename:uploadImg
    const{userMail,role}=req.payload
    try{
        const feedback = new feedbacks({feedbacktype,rating,status,message,email:userMail,usertype:role ,uploadImg:image})
        await feedback.save()
        res.status(200).json({message:"feedback Add succesfully",feedback})
    }
    catch(err){
        res.status(400).json({message:"Error please try after  some time ",err})
    }
}