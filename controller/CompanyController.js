const job=require('../models/JobsModel')
const users = require('../models/userModel')

exports.jobAdd = async(req,res)=>{
    const { jobtitle,dataofupdate,lastdate,discription,role,experience,worktype,workmode,location,education,salary} =req.body
    const companyemail = req.payload.userMail
    console.log("email",companyemail);
   
    try{
        console.log(req.body);
  const activeuser= await users.findOne({email:companyemail})
 console.log("active user",activeuser);
 
        const newjob = new job({jobtitle,dataofupdate,lastdate,discription,role,experience,worktype,workmode,location,education,companyemail,salary,companyname:activeuser. username,comapnyProfile:activeuser.profile})
        await newjob.save()
        res.status(200).json({succes:true,message:"add succesfuly",newjob})
    }
    catch(err){
        console.log("errr in  job adding",err);
        
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
    const { jobtitle,lastdate,discription,role,experience,worktype,workmode,location,education,_id,salary}=req.body
    console.log(req.body);
    // companyname
      
    try{
   const  updatejob = await job.findByIdAndUpdate({_id},{$set:{jobtitle,lastdate,discription,role,experience,worktype,workmode,location,education,salary}},{new:true})

   res.status(200).json({succes:true,message:"editted",updatejob})
    }
    catch(err){
        console.log("job edit err",err);
        res.status(500).json({succes:false,message:"job edit err",err})
        
    }
}


// close job aplication 

 exports.jobaplicationstatus = async(req,res)=>{

    console.log("inside ",req.body);
    const {userid,status}=req.body
    try{


        const updatejobstatus = await job.findByIdAndUpdate({_id:userid},{$set:{status}},{new:true})

        res.status(200).json({ succes:true,message:"status updated",updatejobstatus})

    }

    catch(err){
        res.status(500).json({succes:false,message:"updation not succes",err})
        console.log(err,"status updation err");
        
    }
    

}

// delete jobs

exports.jobdlete = async(req,res)=>{
      
    const {job_id}=req.body
    try{
        const deletejob = await job.findByIdAndDelete({_id:job_id})
        res.status(200).json({succes:true,message:"delete"})

    }
    catch(err){
        res.status(500).json({succes:false,message:"err in delete job",err})
        console.log(err);
        
    }
}