const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: String,
  address: String,
  phoneNo: String,
  ambulanceType: String,
  currentDate:String
},{timestamps:true});

module.exports=mongoose.model("orders", UserSchema)