const mongoose = require('mongoose');

const UserLogin = new mongoose.Schema({
   email:{
      type:String,
      required:true,
      unique:true
   },
   phoneNo:{
    type:String,
    required:true,
    unique:true
   },
   password:{
    type:String,
    min:6,
    max:14,
    required:true
   },
   role:{
    type:Number,
    default:0
   }
});

module.exports = mongoose.model("users", UserLogin);
