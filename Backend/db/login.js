const mongoose = require('mongoose');

const UserLogin = new mongoose.Schema({
   email:{
      type:String,
      required:true,
      unique:true
   },
   phoneNo:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   },
   role:{
    type:Number,
    default:0
   }
});

module.exports = mongoose.model("owners", UserLogin);
