const users =require('../models/userModel')


exports.registerUser = async(req,res)=>{

   
    
    try{
 const {email,username,phone,profile,role,password}=req.body
    const oldUser = await users.findOne({email})
    if(oldUser && oldUser.email==email){
         res.status(402).json("Email or Phone number is Already registered ")
    }
    else{
        const newUser= new users({email,username,phone,profile,role,password})
        await newUser.save()
        res.status(200).json({message:" user rregistration susccesfull",newUser})
    }
    // console.log(oldUser);
    // res.send("resived")


    }

    catch(err){
        // console.log(err);
        res.send({message:"err",err})
        
    }
}