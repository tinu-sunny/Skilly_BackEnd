const users =require('../models/userModel')


exports.registerUser = async(req,res)=>{

   
    
    try{
 const {email,username,phone,profile,role,password}=req.body
    const emailExists  = await users.findOne({email})
    const phoneExists  = await users.findOne({phone})
    // console.log(oldUser);
    
    if(emailExists){
        return res.status(402).json("Email  is Already registered ")
    }
     if (phoneExists){
           return   res.status(402).json("Phone Number  is Already registered ")
    }
    else{
        const newUser= new users({email,username,phone,profile,role,password})
        await newUser.save()
        res.status(200).json({message:"  Registration susccesfull",newUser})
    }
    // console.log(oldUser);
    // res.send("resived")


    }

    catch(err){
        console.log(err);
        res.send(err)
        
    }
}


