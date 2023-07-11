const express = require("express");
const router=express.Router();
const bcrypt=require('bcrypt');
const Owner=require('../db/model/login')
const { hashPassword, ComparePassword } = require("../db/authhelper/helper");
//register
router.post("/register", async (req, res) => {
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
          _id: existingUser._id,
        });
      }
      const user = await new Owner({
        email,
        phoneNo,
        password: hashedPassword,
      }).save();
      res.status(201).send({
        success: true,
        message: "User Created Succesfully",
        user,
      });
    } catch (error) {
      //console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in Registration",
        error,
      });
    }
  });


//login
  router.post("/login", async (req, res) => {
    try {
      const { phoneNo, password } = req.body;
      //console.log(phoneNo, password);
      if (!phoneNo || !password) {
        return res.status(500).send({
          success: false,
          message: "Invalid Phone Number or password",
        });
      }
  
      //check user for compare password
      const user = await Owner.findOne({ phoneNo });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Phone number is not registered",
        });
      }
      const match = await ComparePassword(password, user.password);
      if (!match) {
        return res.status(401).send({
          success: false,
          message: "information does not match please check and try again",
        });
      }
      //console.log(user);
      //token generate kr skte hai
      res.status(200).send({
        success: true,
        message: "Login Successfully",
        user: {
          phoneNo: user.phoneNo,
          role: user.role,
          _id: user._id,
        },
      });
    } catch (error) {
      //console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in Login",
        error,
      });
    }
  });
module.exports = router
  