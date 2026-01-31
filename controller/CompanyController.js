const job=require('../models/JobsModel')


exports.jobAdd = async(req,res)=>{
    const { jobtitle,dataofupdate,lastdate,discription,role,experience,worktype,workmode,location,education} =req.body
    try{
        console.log(req.body);

        const newjob = new job({jobtitle,dataofupdate,lastdate,discription,role,experience,worktype,workmode,location,education})
        await newjob.save()
        res.status(200).json({succes:true,message:"add succesfuly",newjob})
    }
    catch(err){
        res.status(500).json({succes:false,message:"error",err})
    }
}