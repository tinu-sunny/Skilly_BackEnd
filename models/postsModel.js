const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

    caption:{
        type:String,
        required:false
    },
    post:{
        type:String,
        required:false
    },
    comments:{
        type:String,
        required:false
    },
    like:{
        type:Number,
        required:false
    },
    usermail:{
        type:String,
        required:true
    },
    userrole:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('posts',postSchema)