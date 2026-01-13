const mongoose =require('mongoose')

const  feedbackSchema = new mongoose.Schema({

    feedbacktype:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:false ,
        default:"0"
    },
    status:{
        type:String,
        required:true,
        default:false
    },
    message:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    usertype:{
       type:String,
       required:true
    },
    uploadImg:{
       type:String,
       required:false
    }


})

module.exports=mongoose.model('feedbacks',feedbackSchema)