const mongoose = require("mongoose");
const {Schema}=mongoose;
const ContactSchema= new Schema({
    firstname:{
        type:String,
        required:[true, "please enter first name"]
    },
    lastname:{
        type:String,
        required:[true, "please enter last name"]

    },
    phone:{
        type:String,
        required:[true, "please enter phone number"],
        minLength:10,
        maxLength:10
    },
    email:{
        type:String,
        required:[true, "please enter your massage"]
    },
    message:{
        type:String,
        required:[true, "please enter your massage"]
    }
},{timestamps:true})
module.exports = mongoose.model("queryuser",ContactSchema);