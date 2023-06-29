const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: String,
  address: String,
  phoneNo: String,
  ambulanceType: String,
});

module.exports=mongoose.model("users", UserSchema)