const users =require('../models/userModel')
const contact =require('../models/contactModel')
const jwt =require('jsonwebtoken')
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
            res.status(400).json({message:"password mismatch"})
          }

          else if(loginUser && loginUser.status==false){
            res.status(403).json({message:"Account As be deactivated conncte to admin for activation"})
          }
          else if (loginUser && loginUser.password == password){
            const token = jwt.sign({userMail:loginUser.email,role:loginUser.role},process.env.jwtkey)
            console.log(token);
            
           res.status(200).json({message:"logined",loginUser,token})
          }

        else{
             res.status(404).json({message:'not vaild user'})
        }

             
    }
    catch(err){
        console.log(err);
        res.send(err)
        
    }
}

exports.googlelogin = async(req,res)=>{
 

         const{email,password,profile,username,regdate,role}=req.body
         console.log(email,profile,username);
         
           try{
      const existingUser =await users.findOne({email})
      if(existingUser){
         const token = jwt.sign({userMail:existingUser.email,role:existingUser.role},process.env.jwtkey)
            console.log(token);
               res.status(200).json({message:"logined",existingUser,token})
      }
      else{
          const newUser = new users({username,email,password,profile,regdate})
        await newUser.save()
         
        res.status(200).json({ message:"login",existingUser:newUser})
      }
   }
 catch (err) {
  console.error("GOOGLE LOGIN ERROR 👉", err);
  res.status(500).json({
    message: err.message,
    error: err
  });
}
}


exports.googlelogindatasave = async (req,res)=>{
    const{email,password,profile,username,role}=req.body
    try{
        const updateuser = await users.findOneAndUpdate({email},{$set:{email,password,profile,username,role}},{new:true})

         await updateuser.save()
           const token = jwt.sign({userMail:email,role:role},process.env.jwtkey)
            console.log(token);
        res.status(200).json({message :'succes',updateuser,token})
    }
    catch(err){
        console.log(err);
        
        res.status(500).json({message:'unscess',err})
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


exports.activeuser = async(req,res)=>{

    const{userMail}=req.payload

    const user = await users.findOne({email:userMail})
    console.log(user);
    res.status(200).json({message:"user data",user})
    
}

exports.allusers = async(req,res)=>{
    
    try{
        const allusers = await users.find()
    res.status(200).json({ success:true,message:"all users",allusers})
} catch(err){
    console.log("err in c",err);
    
    res.status(500).json({success:false,messsage:"error",err})
}
}