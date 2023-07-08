const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const Query = require("./db/model/Contact");
const ConnectDb = require("./db/config");
const Orders = require("./db/model/users");

const Owner = require("./db/model/login");
const JWT = require("jsonwebtoken");
const app = express();
const { hashPassword, ComparePassword } = require("./db/authhelper/helper.js");
ConnectDb();
app.use(express.json());
app.use(cors());
//view BookingData
app.get("/BookingData/:phone", async (req, resp) => {
  try {
    let phone_number = req.params.phone;
    const orders = await Orders.find({ phoneNo: phone_number });
    resp.status(200).send(orders);

    //console.log(orders);
    // localStorage.setItem("phone",JSON.stringify())
  } catch (error) {
    console.warn(error);
    resp.status(500).send({
      success: false,
      error: "Internal Server Error",
      message: "Error in fetching booking data ",
    });
  }
});

app.get("/BookingData", async (req, res) => {
  try {
    // const currentDate = new Date();
    // req.body.date = currentDate;

    const result = await Orders.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving booking data" });
  }
});

app.post("/BookingData", async (req, resp) => {
  const currentDate = new Date();
  req.body.date = currentDate;
  const user = new Orders(req.body);
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
app.post("/login", async (req, res) => {
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
    //token generate kr skte hai yha
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

app.post("/owner", async (req, resp) => {
  const user = new Owner(req.body);
  let result = await user.save();
  //console.log("data", data);
  resp.send(result);
});

app.get("/owner", async (req, resp) => {
  const user = await Owner.find({});
  resp.send(user);
});


app.post("/contact", async (req, res) => {
  try {
    const { firstname, lastname, email, phone, message } = req.body;

    if ( !firstname || !lastname || !phone || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Invalid details",
      });
    }

    const query = new Query({
      firstname,
      lastname,
      email,
      phone,
      message,
    });

    await query.save();

    res.status(201).json({
      success: true,
      message: "Query submitted",
      query,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});


app.get("/data-contact-medalert", async (req, res) => {
  try {
    const query = await Query.find();
    res.status(200).send({
      query,
      message: "Query Displayed",
    });
  } catch (error) {
    //console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
});

app.listen(5000);

//console.log(Date());
