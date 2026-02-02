const job=require('../models/JobsModel')


exports.jobAdd = async(req,res)=>{
    const { jobtitle,dataofupdate,lastdate,discription,role,experience,worktype,workmode,location,education} =req.body
    const companyemail = req.payload.userMail
    console.log("email",companyemail);
    
    try{
        console.log(req.body);

        const newjob = new job({jobtitle,dataofupdate,lastdate,discription,role,experience,worktype,workmode,location,education,companyemail})
        await newjob.save()
        res.status(200).json({succes:true,message:"add succesfuly",newjob})
    }
    catch(err){
        res.status(500).json({succes:false,message:"error",err})
    }
}


// view the company add jobs of that company

exports.jobViewCompany = async(req,res)=>{
     const email = req.payload.userMail

     console.log("text",email);
     
     try{
     const jobData = await job.find({companyemail:email}).sort({_id:-1})
res.status(200).json({succes:true,message:"Job data",jobData})

     }
     catch(err){
         
        console.log(err);
        res.status(500).json({ succes:false, message:"err",err})
        
     }
}


// add job edit company 

exports.jobeditcompany = async(req,res)=>{
    const { jobtitle,lastdate,discription,role,experience,worktype,workmode,location,education,_id}=req.body
    console.log(req.body);
    
      
    try{
   const  updatejob = await job.findByIdAndUpdate({_id},{$set:{jobtitle,lastdate,discription,role,experience,worktype,workmode,location,education}},{new:true})
   
   res.status(200).json({succes:true,message:"editted",updatejob})
    }
    catch(err){
        console.log("job edit err",err);
        res.status(500).json({succes:false,message:"job edit err",err})
        
    }
}


