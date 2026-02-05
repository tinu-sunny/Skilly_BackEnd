const workshop = require('../models/workshopModal')
const users = require('../models/userModel')
exports.workshopAdd = async (req,res) =>{
    // find users 

    console.log(req.payload);
    const useremai= req.payload.userMail
    const {title,description,category,date,location,mode,registrationlink,poster,createdDate}=req.body
    const image =req.file?req.file.filename:poster
    try{

        const uploaduser = await users.find({email:useremai})
        const {username,role,email}=uploaduser[0]
        console.log(
            username,role
        );
        console.log("user data ",uploaduser);

const newworkshop =  new workshop ({title,description,category,date,location,mode,registrationlink,poster:image,createdDate,organizertype:role,organizername:username,contact:email})
await newworkshop.save()

        
        res.status(200).json({success:true,message:"add successfull",newworkshop})

    }
    catch(err){
        console.log("err in worshop add companny");
        res.status(500).json({success:false,message:"err in worshop add",err})
        
    }
}