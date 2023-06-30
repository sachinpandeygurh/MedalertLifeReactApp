const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("./db/config");
const Users = require("./db/users");
// const Login = require('./db/login')
const Owner = require("./db/login"); //autospanaped kam nahi krta
const JWT = require("jsonwebtoken");
const app = express();
const {hashPassword,ComparePassword} = require("./db/authhelper/helper.js");

app.use(express.json());
app.use(cors());

//view BookingData
app.get("/BookingData", async (req, resp) => {
  const user = await Users.find({});
  // console.log("data", data)
  resp.send(user);
});
//regsiter
app.post("/register", async (req, res) => {
  try {
    const { email, phoneNo, password } = req.body;
    if (!email) {
      return res.send({
        message: "email is required",
      });
    }
    if (!phoneNo) {
      return res.send({
        message: "phone number is required",
      });
    }
    if (!password) {
        return res.send({
          message: "password is required",
        });
    }
    const hashedPassword = await hashPassword(password);
    //check for already exist user
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User Already Register please Login",
      });
    }
    const user = await new Owner({email,phoneNo,password:hashedPassword}).save();
    res.status(201).send({
      success: true,
      message: "User Created Succesfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
});
//login
app.post('/login', async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email||!password){
            return res.status(404).send({
                success:false,
                message:"Invalid email or password"
            })
        }

        //check user for compare password
        const user = await Owner.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not registered',
                error
            })
        }
        const match = await ComparePassword(password,user.password);
        if(!match){
            return res.status(200).send({
                success:false,
                message:"lode aache se dal tori mai ka burr"
            })
        }
        //token generate kr skte hai yha
        res.status(200).send({
            success:true,
            message:'Login Successfully',
            user:{
                email:user.email,
                phoneNo:user.phoneNo,
                role:user.role
            }
        })

    } catch (error) { 
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in Login',
            error
        })
    }
})

app.post("/BookingData", async (req, resp) => {
  const user = new Users(req.body);
  let result = await user.save();
  // console.log("data", data)
  resp.send(result);
});
app.post("/owner", async (req, resp) => {
  const user = new Owner(req.body);
  let result = await user.save();
  // console.log("data", data)
  resp.send(result);
});

app.get("/owner", async (req, resp) => {
  const user = await Owner.find({});
  resp.send(user);
});

app.listen(5000);
