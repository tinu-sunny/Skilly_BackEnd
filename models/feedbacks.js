const mongoose =require('mongoose')

const  feedbackSchema = new mongoose.Schema({

    feedbacktype:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true 
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
    }


})

module.exports=mongoose.model('feedbacks',feedbackSchema)