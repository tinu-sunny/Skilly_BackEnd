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
        type:Number,
        require:false,
        // unique:true
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