const mongoose = require('mongoose')

const carrerfieldSchema = new mongoose.Schema({
    coursename:{
        type:String,
        required:true
    },
    avgsalary:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
type:String,
required:true
    },
    thumbnail:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model('carrefields',carrerfieldSchema)