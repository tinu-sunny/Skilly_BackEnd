const carrerfield =require('../models/carrerfieldModel')


exports.carrerfieldview = async (req,res)=>{

    try{
        const data = await carrerfield.find()
        res.status(200).json({message:"carrerfields",data})
    }
    catch(err){
        res.status(400).json({message:"error",err})
    }
}