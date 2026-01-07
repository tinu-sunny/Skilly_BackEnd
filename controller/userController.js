const users =require('../models/userModel')
const contact =require('../models/contactModel')
// registration
exports.registerUser = async(req,res)=>{

   
    
    try{
 const {email,username,phone,profile,role,password,status,regdate}=req.body
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
        const newUser= new users({email,username,phone,profile,role,password,status,regdate})
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


// manuval Login

exports.userlogin = async(req,res)=>{
    try{

        const {email,password}=req.body
             const loginUser= await users.findOne({email})
             console.log(loginUser);

          if(loginUser && loginUser.password != password){
            res.status(400).json("password mismatch")
          }
          else if (loginUser && loginUser.password == password){
           res.status(200).json({message:"logined",loginUser})
          }

        else{
             res.status(404).json('not vaild user')
        }

             
    }
    catch(err){
        console.log(err);
        res.send(err)
        
    }
}



// admin user view

exports.viewUsers=async(req,res)=>{
    try{
        const userData= await users.find({ role: { $ne: "admin" } })
        
        res.status(200).json({message:"user data",userData})

    }

    catch(err){
        console.log(err);
        

    }
}


exports.contactreg =async(req,res)=>{
    try{

        const {email,username,phone,message,inquiryType} =req.body
        //  res.send("save")
        const newContact = new contact({email,username,phone,message,inquiryType})
        await newContact.save()
        res.status(200).json({message:"susccesfull",newContact})
    }

    catch(err){
        console.log(err);
         res.send(err)
        
    }
}
