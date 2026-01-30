const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
       required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
       
        default:null
    },
     profile:{
        type:String,
        required:false
    },

    role:{
        type:String,
        required:false,
        default:"user"
    },
    password:{
        type:String,
        required:true,
         default:"123456"

    },
    status:{
        type:Boolean,
        required:true,
        default:true    
    },

    regdate:{
        type:String,
        required:true
    }

    

})

module.exports = mongoose.model('Users',userSchema)