const mongoose = require('mongoose')

const jobsSchema = new  mongoose.Schema({

   
    jobtitle:{
        type:String,
        required:true
    },
    dataofupdate:{
        type:String,
        required:true
    },
    lastdate:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true,
        default:false
    },
experience:{
    type:String,
    required:true
},
worktype:{
    type:String,
    required:true
},
workmode:{
    type:String,
    required:true
},
location:{
    type:String,
    required:true
},
education:{
    type:String,
    required:true
}

})

module.exports = mongoose.model('jobs',jobsSchema);
