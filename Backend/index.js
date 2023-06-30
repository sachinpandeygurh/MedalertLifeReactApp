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
 try {
    const users = await Users.find({});
    resp.status(200).send(users)
 } catch (error) {
    console.warn(error);
    resp.send({
        success:false,
        error:"Internal Server Error",
        message:"Error in fetching booking data "
    })
 }
});

app.post("/BookingData", async (req, resp) => {
    const currentDate = new Date(); 
    req.body.date = currentDate; 
    const user = new Users(req.body);
    const result = await user.save();
    resp.send(result);

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
    const existingUser = await Owner.findOne({ phoneNo });
    
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User Already Register please Login",
        _id:existingUser._id
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
app.post('/login', async(req,res)=>{ //slkdfdjflklskdjd
    try {
        const {phoneNo,password}=req.body;
        console.log(phoneNo,password);
        if(!phoneNo||!password){
            return res.status(404).send({
                success:false,
                message:"Invalid Phone Number or password"
            })
        }

        //check user for compare password
        const user = await Owner.findOne({phoneNo})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Phone number is not registered',
               
            })
        }
        const match = await ComparePassword(password,user.password);
        if(!match){
            return res.status(200).send({
                success:false,
                message:"information does not match please check and try again"
            })
        }
        //token generate kr skte hai yha
        res.status(200).send({
            success:true,
            message:'Login Successfully',
            user:{
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

// console.log(Date());