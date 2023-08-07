const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const mongo_uri = process.env.REACT_APP_MONGO_URI || "mongodb+srv://sachinpandey123:sachinpandey@cluster0.xmlsy39.mongodb.net/ecommercemed?retryWrites=true&w=majority";

require("dotenv").config();
const ConnectDb = async () => {
  try {
    await mongoose.connect(mongo_uri, {
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = ConnectDb;
