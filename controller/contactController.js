const contact =require('../models/contactModel')

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