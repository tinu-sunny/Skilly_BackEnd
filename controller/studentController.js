const carrerfield =require('../models/carrerfieldModel')
const feedbacks = require('../models/feedbacks')
const job =require('../models/JobsModel')

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


exports.studentjobsview =async(req,res)=>{
    try{
        const jobs = await job.find({
status
:{$eq:false}}).sort({_id:-1})
        res.status(200).json({succes:true,message:"job data",jobs})
    }
    catch(err){
        console.log("err in  job view student",err);
        res.status(500).json({succes:false,message:"err in job studebnt view ",err})
        
    }
}