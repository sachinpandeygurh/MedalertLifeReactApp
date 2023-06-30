const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    phoneNo: Number,
    password: String
});

module.exports = mongoose.model("owners", UserSchema);
