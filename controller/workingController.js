const posts = require('../models/postsModel')

// add post 

exports.post =async(req,res)=>{

    const {caption,comments,like,post}= req.body
const image = req.file? req.file.filename:post
    const{userMail,role}=req.payload
    try{
        const workingpost = new posts ({caption,post:image,comments,like,usermail:userMail,userrole:role})
        await workingpost.save()
        res.status(200).json({message:"post add succesfully",workingpost})
    }
    catch(err){
        console.log(err);
        
        res.status(400).json({message:"error please try after some time",err})
    }

}