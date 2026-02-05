const mongoose = require("mongoose");

const workshopSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
  registrationlink: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  createdDate: {
    type: String,
    required: true,
  },
  organizertype:{
    type:String,
    required:true
    
  },
  organizername:{
    type:String,
    required:true
  },
  contact:{
    type:String,
    required:true
  },
  status:{
    type:String,
    required:true,
    default:false
  }
});

module.exports = mongoose.model("workshops", workshopSchema);
